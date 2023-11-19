'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactList from '@/components/Contact/ContactList';
import SplitDetails from '@/components/SplitDetails/SplitDetails';
import Header from '@/components/ui/Header';
import BackArrowIcon from '@/components/ui/icons/BackArrowIcon';
import SharePurchaseIcon from '@/components/ui/icons/SharePurchaseIcon';
import useAppContext from '@/hooks/useAppContext';

const Page = () => {
  const { state } = useAppContext();
  const pathId = usePathname().split('/').pop();
  const [accountName, purchaseId] = pathId?.split('&') || ['', ''];
  const account = state.accounts[accountName];
  const purchase = Object.values(account?.purchases).find(
    (purchase) => purchase.id === purchaseId
  )!;
  return (
    <div className="mx-4">
      <Header title="Split Bill" icon="splitBill" back />
      {/* <div className="mx-2 mb-4 flex h-4 max-w-5xl items-center justify-between lg:mx-auto lg:px-4">
        <div className="group my-auto rounded-full bg-emerald-300/95 p-2 transition-all duration-200 hover:bg-emerald-300">
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
          <h2 className="text-4xl font-bold text-emerald-300">Split Bill</h2>
        </div>
      </div> */}
      <div className="m-auto max-w-5xl">
        <SplitDetails purchase={purchase} />
        <ContactList purchase={purchase} />
      </div>
    </div>
  );
};

export default Page;
