'use client';

import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');

  const handleCredentialLogin = () => {
    signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/dashboard',
    });
  };
  const handleGithubLogin = () => {
    signIn('github', {
      redirect: true,
      callbackUrl: '/dashboard',
    });
  };

  // const handleGoogleLogin = () => {
  //   signIn('github', {
  //     redirect: true,
  //     callbackUrl: '/dashboard',
  //   });
  // };

  // console.log(session);
  return (
    <main className="flex h-screen flex-col items-center justify-center space-y-8 bg-slate-900">
      <h1 className="text-center text-gray-500">Login</h1>
      <div className="flex w-[300px] flex-col gap-2">
        <Input
          className="rounded-xl"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="rounded-xl"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPasssword(e.target.value)}
        />
        <Button onClick={handleCredentialLogin} className="rounded-xl bg-amber-600 font-bold">
          Login
        </Button>
        <p className="text-center text-white">Or</p>
        <Button onClick={handleGithubLogin} className="rounded-xl bg-green-700  font-bold">
          <Github />
          Continue with Github
        </Button>
      </div>
    </main>
  );
}
