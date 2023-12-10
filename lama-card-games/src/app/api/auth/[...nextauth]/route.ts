import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';
import DiscordProvider from 'next-auth/providers/discord';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
    DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_ID ?? '',
        clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
    })
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  }),
  session: {
    strategy: 'jwt',
    maxAge: 2592000, // 30 days
    updateAge: 86400, // 1 day
  },
};

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}