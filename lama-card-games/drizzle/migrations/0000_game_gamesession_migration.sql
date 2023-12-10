CREATE TABLE IF NOT EXISTS "game" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gameSession" (
	"id" serial PRIMARY KEY NOT NULL,
	"gameId" integer NOT NULL,
	"name" varchar(256) NOT NULL,
	"password" varchar(256),
	"maxNumberOfPlayers" integer NOT NULL,
	"numberOfPlayers" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "gameSession" ADD CONSTRAINT "gameSession_gameId_game_id_fk" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
