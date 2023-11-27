'use client';
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      {session ? (
        <Button className="rounded-xl bg-indigo-500 text-white" onClick={() => signOut()}>
          Logout
        </Button>
      ) : (
        <Button className="rounded-xl bg-indigo-500 text-white" onClick={() => signIn()}>
          Login
        </Button>
      )}
    </div>
  );
}
