'use client';

import { usePathname } from 'next/navigation';

import ContactList from '@/components/SplitContacts/SplitContacts';
import SplitDetails from '@/components/SplitDetailCard/SplitDetailCard';
import Header from '@/components/ui/Header';
import useAppContext from '@/hooks/useAppContext';

const Page = () => {
  const { state } = useAppContext();

  const pathId = usePathname().split('/').pop();
  const [accountName, purchaseId] = pathId?.split('&') || ['', ''];

  const account = state.accounts[accountName];
  const purchase = Object.values(account?.purchases).find(
    (purchase) => purchase.id === purchaseId
  );

  return (
    <div className="mx-4">
      <Header title="Split Bill" icon="splitBill" back />
      <div className="m-auto max-w-5xl">
        {purchase ? (
          <>
            <SplitDetails purchase={purchase} />
            <ContactList purchase={purchase} />
          </>
        ) : (
          <h3>Could not find your purchase.</h3>
        )}
      </div>
    </div>
  );
};

export default Page;
