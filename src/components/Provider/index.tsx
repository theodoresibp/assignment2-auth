'use client';

import { SessionProvider } from 'next-auth/react';

interface AuthProviderProps {
  children: React.ReactNode;
}

// eslint-disable-next-line max-len
// eslint-disable-next-line import/prefer-default-export, react/function-component-definition, react/prop-types
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return <SessionProvider session={null}>{children}</SessionProvider>;
};
