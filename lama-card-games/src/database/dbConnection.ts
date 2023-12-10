// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

// // Create and export the Supabase client.
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@/database/schema';

const connectionString = process.env.SUPABASE_CONNECTIONSTRING ?? '';
const client = postgres(connectionString);
const dbConnection = drizzle(client, {schema});

export default dbConnection;