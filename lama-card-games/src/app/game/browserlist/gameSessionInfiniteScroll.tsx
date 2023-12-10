'use client';
import React, { useRef } from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeader,
} from '@/components/ui/table';
import { getOpenGameSessions } from '@/app/actions/gameSessionActions';
import LoadMoreInfinityScroll from '@/components/loadMoreInfinityScroll';
import { useState } from 'react';
import { GameSessionResultType } from '@/database/repositories/gameSessionRepository';


interface GameSessionInfiniteScrollProps {}

const GameSessionInfiniteScroll: React.FC<GameSessionInfiniteScrollProps> = (
  props,
) => {
  const page = useRef(0);
  const [openSessions, setOpenSessions] = useState<GameSessionResultType[]>([]);
  const [canLoadMore, setCanLoadMore] = useState(true);

  return (
    <LoadMoreInfinityScroll
      onLoadData={() => {
        setCanLoadMore(false); 
        console.log('loading more data', page.current);
        const gameSessions = getOpenGameSessions({
          page: page.current,
          pageSize: 2,
          sort: {
            property: 'id',
            direction: 'asc',
          },
        });
        gameSessions.then((gameSession) => {
          page.current = page.current + 1;
          const allSessions = [...openSessions, ...gameSession.data];
          setOpenSessions(allSessions);
            setCanLoadMore( gameSession.paging.page < (gameSession.paging.totalPages ?? 0));
        });
      }}
      canLoadMore={canLoadMore}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Game</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Players</TableHead>
            <TableHead>Is locked</TableHead>
            <TableHead>Has password?</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {openSessions.map((session) => {
            return (
              <TableRow key={session.id}>
                <TableCell>{session.game.name}</TableCell>
                <TableCell>{session.name}</TableCell>
                <TableCell>
                  {session.numberOfPlayers} / {session.maxNumberOfPlayers}{' '}
                </TableCell>
                <TableCell>{session.isLocked}</TableCell>
                <TableCell>{!!session.password}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </LoadMoreInfinityScroll>
  );
};

export default GameSessionInfiniteScroll;
