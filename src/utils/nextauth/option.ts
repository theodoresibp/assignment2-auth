import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubCredential from 'next-auth/providers/github';

import prisma from '@/db/utils/prisma';

// eslint-disable-next-line import/prefer-default-export
export const options: AuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { type: 'email', label: 'Email', placeholder: 'Enter your email' },
        password: { type: 'password', label: 'Password', placeholder: 'Enter your password' },
      },

      authorize: async (credential) => {
        const email = credential?.email;
        const password = credential?.password;

        const findUser = await prisma.user.findUnique({
          where: {
            email,
            password,
          },
        });

        if (findUser) {
          return {
            id: findUser.id,
            name: findUser.name,
            email: findUser.email,
            image: findUser.image,
          };
        }

        return null;
      },
    }),
    GithubCredential({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      const findUser = await prisma.user.findUnique({
        where: {
          email: user.email as string,
        },
      });

      if (!findUser) {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email as string,
            image: user.image,
          },
        });
      }

      return true;
    },
    //  Extend session
    session: async ({ session }) => {
      if (session.user) {
        const findUser = await prisma.user.findUnique({
          where: {
            email: session.user.email as string,
          },
        });

        if (findUser) {
          // eslint-disable-next-line no-param-reassign
          session.user.id = findUser.id;
          session.user.role = findUser.role;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};
