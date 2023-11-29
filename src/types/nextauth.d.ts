import { DefaultSession } from 'next-auth';

// hanya untuk di module next-auth
declare module 'next-auth' {
  interface User {
    id?: string;
    role?: string;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
