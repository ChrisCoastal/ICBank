'use client';

import React, { useState } from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';
import { nanoid } from 'nanoid';
import { Purchase } from '@/@types';
import { Button } from '@/components/ui/Button';
import SplitDetails from '@/components/SplitDetails/SplitDetails';
import ContactList from '@/components/Contact/ContactList';
import BackArrowIcon from '@/components/ui/icons/BackArrowIcon';

type PurchaseProps = {
  purchase: Purchase;
};

const Page: FC<PurchaseProps> = () => {
  // const { state, dispatch } = useAppContext();
  // const pathId = usePathname().split('/').pop();
  // const [accountName, purchase] = pathId?.split('&')!;
  // const project = Object.values(state.accounts).find(
  //   (account) => account.name === pathId
  // );

  // useEffect(() => {
  //   if (!project) notFound();
  // }, [project]);

  return (
    <div className="mx-4">
      <div className="flex flex-col gap-12">
        <Link href="/">
          <BackArrowIcon />
        </Link>
        <h2 className="font-bold text-lg mb-4">Split Bill</h2>
      </div>
      <SplitDetails />
      <ContactList />
    </div>
  );
};

export default Page;
