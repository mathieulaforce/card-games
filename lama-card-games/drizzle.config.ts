import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/database/schema/index.ts',
  out: './drizzle/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.SUPABASE_CONNECTIONSTRING ?? '',
  },
} satisfies Config;