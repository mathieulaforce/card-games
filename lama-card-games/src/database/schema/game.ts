import { relations } from 'drizzle-orm';
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { createSelectSchema } from 'drizzle-zod';
import { gameSession } from '.';

export const game = pgTable('game', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  desciption: varchar('description', { length: 256 }),
});

export type GameDTO = typeof game.$inferSelect;

export const gameRelation = relations(game, ({ many }) => ({
  gameSession: many(gameSession),
}));

export const gameSelectSchema = createSelectSchema(game);
