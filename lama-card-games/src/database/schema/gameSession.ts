import {
  pgTable,
  serial,
  varchar,
  integer,
  boolean,
} from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { game } from './game';
import { relations } from 'drizzle-orm';

export const gameSession = pgTable('gameSession', {
  id: serial('id').primaryKey().notNull(),
  gameId: integer('gameId')
    .notNull()
    .references(() => game.id),
  name: varchar('name', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }),
  maxNumberOfPlayers: integer('maxNumberOfPlayers').notNull(),
  numberOfPlayers: integer('numberOfPlayers').notNull(),
  isSessionStarted: boolean('isSessionStarted').notNull().default(false),
  isLocked: boolean('isLocked').notNull().default(false),
});

export const gameSessionRelation = relations(gameSession, ({ one }) => ({
  game: one(game, {
    fields: [gameSession.gameId],
    references: [game.id],
  }),
}));

export const gameSessionInsertSchema = createInsertSchema(gameSession);
export const gameSessionSelectSchema = createSelectSchema(gameSession);
export type GameSessionDTO = typeof gameSession.$inferSelect;