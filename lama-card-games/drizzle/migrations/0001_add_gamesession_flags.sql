ALTER TABLE "gameSession" ADD COLUMN "isSessionStarted" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "gameSession" ADD COLUMN "isLocked" boolean DEFAULT false NOT NULL;