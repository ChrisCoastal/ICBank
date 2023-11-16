'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// components
import BackArrowIcon from '@/components/ui/icons/BackArrowIcon';
import SharePurchaseIcon from '@/components/ui/icons/SharePurchaseIcon';
import ContactList from '@/components/Contact/ContactList';
import SplitDetails from '@/components/SplitDetails/SplitDetails';

// hooks
import useAppContext from '@/hooks/useAppContext';

const Page = () => {
  const { state } = useAppContext();
  const pathId = usePathname().split('/').pop();
  const [accountName, purchaseId] = pathId?.split('&')!;
  const account = state.accounts[accountName];
  const purchase = Object.values(account?.purchases).find(
    (purchase) => purchase.id === purchaseId
  )!;
  return (
    <div className="mx-4">
      <div className="flex justify-between items-center mx-2 mb-4 max-w-5xl lg:mx-auto lg:px-4">
        <div className="group rounded-full my-auto bg-emerald-300/95 hover:bg-emerald-300 p-2 transition-all duration-200">
          <Link href="/" className="w-8">
            <BackArrowIcon className="fill-stone-800" />
          </Link>
        </div>
        <div className="flex gap-2 ">
          <SharePurchaseIcon
            className="fill-emerald-300"
            height="40"
            width="40"
          />
          <h2 className="font-bold text-4xl text-emerald-300">Split Bill</h2>
        </div>
      </div>
      <div className="max-w-5xl m-auto">
        <SplitDetails purchase={purchase} />
        <ContactList purchase={purchase} />
      </div>
    </div>
  );
};

export default Page;
