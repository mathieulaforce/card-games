'use server'
import gameSessionRepository from "@/database/repositories/gameSessionRepository";
import { GameSessionDTO } from "@/database/schema/gameSession";
import { PagingRequest } from "@/lib/paging";

export async function getOpenGameSessions(paging: PagingRequest, filter?: { gameId?: number }) {
    console.log('get sessions')

    const sessions = await gameSessionRepository.getOpenGameSessions({
        page: paging.page,
        pageSize: paging.pageSize,
        sort: {
            property:  paging.sort?.property as keyof GameSessionDTO ?? "id",
            direction: paging.sort?.direction ?? "asc"    
        }
    }, filter?? {});
    console.log("sessions",sessions)
    return sessions;
  }