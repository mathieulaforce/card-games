import dbConnection from '@/database/dbConnection';
import { PagingRequest, PagingResult } from '@/lib/paging';
import { SQL, count, eq } from 'drizzle-orm';
import { gameSession } from '@/database/schema/gameSession';
import { game } from '@/database/schema/game';
import withPagination from '../withPagination';


export type GameSessionResultType = typeof gameSession.$inferSelect & {game: typeof game.$inferSelect};
export type GetOpenGameSessionResponse = PagingResult<GameSessionResultType>;

export interface IGameSessionRepository {
  getOpenGameSessions(
    paging: PagingRequest,
    filter: { gameId?: number },
  ): Promise<GetOpenGameSessionResponse>;
}

const gameSessionRepository: IGameSessionRepository = {
  getOpenGameSessions: async (
    paging: PagingRequest,
    filter: { gameId?: number },
  ): Promise<GetOpenGameSessionResponse> => {

    const whereClause = (session: any): SQL | undefined => {
      const gameId = filter?.gameId ?? 0;
      if (gameId > 0) {
        return (
          eq(session.gameId, gameId) && eq(session.isSessionStarted, false)
        );
      } else {
        return eq(session.isSessionStarted, false);
      }
    };
    const query = dbConnection
      .select()
      .from(gameSession)
      .where(whereClause)
      .innerJoin(game, eq(game.id, gameSession.gameId));

    const data = (
      await withPagination(query.$dynamic(), paging)
    ).map((session) => {
      return {
        ...session.gameSession,
        game: {
          ...session.game,
        },
      };
    });
    
    const total = await dbConnection
      .select({ value: count() })
      .from(gameSession).where(whereClause(gameSession))
      .execute();

    return {
      data: data,
      paging: {
        page: paging.page,
        pageSize: paging.pageSize,
        total: total[0].value,
        totalPages: Math.ceil(total[0].value / paging.pageSize),
      },
    };
  },
};

export default gameSessionRepository;
