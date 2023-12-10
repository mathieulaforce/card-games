'use server'

import gameRepository from "@/database/repositories/gameRepository";

export async function getGames() {
    console.log('getGames')
    await new Promise(resolve => setTimeout(resolve, 5000));
    const games = await gameRepository.getGames();
    console.log(games)
    return games;
  }