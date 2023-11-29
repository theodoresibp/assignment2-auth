import { getServerSession } from 'next-auth';
import React from 'react';

import Home from '@/app/components/Home/Home';
import { adminMenu, userMenu } from '@/const/constMenu';
import { options } from '@/utils/nextauth/option';

export default async function Page() {
  // Server Session
  const session = await getServerSession(options);

  const menu: NavItem[] = session?.user?.role === 'ADMIN' ? adminMenu : userMenu;

  console.log(menu);

  return <Home />;
}
