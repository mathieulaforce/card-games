import dbConnection from '@/database/dbConnection';
import { GameDTO, game } from '@/database/schema/game';

export interface IGameRepository {
  getGames(): Promise<GameDTO[]>;
}

const gameRepository: IGameRepository = {
  getGames: async (): Promise<GameDTO[]> => {
    return await dbConnection.select().from(game).execute();
  },
};

export default gameRepository;
