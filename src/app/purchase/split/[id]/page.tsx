'use client';

import { doc, onSnapshot } from '@firebase/firestore';
import { usePathname } from 'next/navigation';
import { Suspense, useEffect } from 'react';

import type { Purchase } from '@/@types';
import ContactList from '@/components/SplitContacts/SplitContacts';
import SplitDetails from '@/components/SplitDetailCard/SplitDetailCard';
import Header from '@/components/ui/Header';
import { db } from '@/firebase/firebase.config';
import useAppContext from '@/hooks/useAppContext';

const Page = () => {
  const { state, dispatch } = useAppContext();
  const pathId = usePathname().split('/').pop();
  const [accountId, purchaseId] = pathId?.split('&') || ['', ''];

  const account = state.accounts[accountId];
  const purchase = Object.values(account?.purchases).find(
    (purchase) => purchase.id === purchaseId
  );

  useEffect(() => {
    if (purchaseId && accountId) {
      const unsubscribe = onSnapshot(
        doc(db, `accounts/${accountId}/purchases/${purchaseId}`),
        (doc) => {
          if (!doc.exists()) return;
          else
            dispatch({
              type: 'UPDATE_PURCHASE',
              payload: { accountId, purchase: doc.data() as Purchase },
            });
        }
      );
      return () => unsubscribe();
    }
  }, [accountId, purchaseId, dispatch]);

  return (
    <div className="mx-4">
      <Header title="Split Bill" icon="splitBill" back />
      <div className="m-auto max-w-5xl">
        <Suspense fallback={<h3>Loading...</h3>}>
          {purchase ? (
            <>
              <SplitDetails purchase={purchase} />
              <ContactList purchase={purchase} />
            </>
          ) : (
            <h3>Could not find your purchase.</h3>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
