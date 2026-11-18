import { DefaultSession, NextAuthOptions } from 'next-auth';
import { env } from './env';

// Extend the built-in session type with the user id exposed by the JWT callback.
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: { id: string } & DefaultSession['user'];
  }
}

/**
 * NextAuth v4 configuration. JWT sessions intentionally avoid an optional
 * MongoDB adapter dependency; the current public portfolio does not expose
 * an authentication workflow that requires persistent OAuth accounts.
 */
export async function getAuthOptions(): Promise<NextAuthOptions> {
  const providers: NextAuthOptions['providers'] = [];

  if (env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) {
    const GoogleProvider = require('next-auth/providers/google').default;
    providers.push(GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }));
  }

  if (env.GITHUB_ID && env.GITHUB_SECRET) {
    const GitHubProvider = require('next-auth/providers/github').default;
    providers.push(GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }));
  }

  // Do not provide a fake/demo credential account. Configure real OAuth
  // providers through environment variables before enabling authentication.
  return {
    providers,
    session: { strategy: 'jwt' },
    pages: { signIn: '/auth/signin', error: '/auth/error' },
    callbacks: {
      async session({ session, token }) {
        if (session.user && token.sub) session.user.id = token.sub;
        return session;
      },
      async jwt({ token, user }) {
        if (user) token.id = user.id;
        return token;
      },
    },
    secret: env.NEXTAUTH_SECRET,
    debug: env.NODE_ENV === 'development',
  };
}
