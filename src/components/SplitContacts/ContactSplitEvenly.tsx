'use client';
import { doc, setDoc } from 'firebase/firestore';
import type { FC } from 'react';
import { useRef } from 'react';

import type { Purchase } from '@/@types';
import { Label } from '@/components/ui/Label';
import { Switch } from '@/components/ui/Switch';
import { db } from '@/firebase/firebase.config';
import { getEvenSplit } from '@/lib/utils';

type ContactSplitEvenlyProps = {
  purchase: Purchase;
};

const ContactSplitEvenly: FC<ContactSplitEvenlyProps> = ({ purchase }) => {
  const switchRef = useRef<HTMLButtonElement>(null);

  function handleClick(checked: boolean) {
    const updatedSplit = getEvenSplit(purchase.split);
    const accountRef = doc(
      db,
      `accounts/${purchase.accountId}/purchases/`,
      purchase.id
    );

    setDoc(
      accountRef,
      {
        ...purchase,
        split: updatedSplit,
        splitEven: checked,
      },
      { merge: true }
    ).catch((error) => console.error('Error writing document: ', error));
  }

  return (
    <div className="mr-2 flex items-center gap-2">
      <Switch ref={switchRef} id="split-even" onCheckedChange={handleClick} />
      <Label htmlFor="split-even" className="text-xs font-light">
        Even Split
      </Label>
    </div>
  );
};

export default ContactSplitEvenly;
