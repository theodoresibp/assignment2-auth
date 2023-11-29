'use client';

import { LogOut } from 'lucide-react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

import { Button } from '@/components/ui/button';

import { CounterApp } from '../Content/CounterApp';

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className="realtive h-screen  text-white">
      <div className="flex justify-between p-6">
        <div className="text-xl font-bold">MyAssignment</div>

        <div className="flex items-center gap-4">
          <div className="font-bold">{session?.user?.name}</div>

          <div className="overflow-hidden rounded-full border-4 border-green-200 hover:animate-spin">
            <Image src={session?.user?.image as string} alt="" width={50} height={50} />
          </div>

          <Button
            className="gap-2 rounded-xl bg-amber-500 text-white hover:scale-110"
            onClick={() => signOut()}
          >
            <LogOut />
            Logout
          </Button>
        </div>
      </div>
      <div className="area absolute top-0 h-screen">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      <CounterApp />
    </main>
  );
}
