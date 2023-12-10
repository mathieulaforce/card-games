import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from '@/database/schema/index';
import postgres from 'postgres';

const connectionString = process.env.SUPABASE_CONNECTIONSTRING ?? '';
const migrationsClient = postgres(connectionString, {
  max: 1,
});

const db = drizzle(migrationsClient);
migrate(db, { migrationsFolder: 'drizzle/migrations',  })
  .then(() => {
    console.log('Migrations complete!');
    return migrationsClient.end();
  })
  .then(() => console.log('Connection closed!'));

