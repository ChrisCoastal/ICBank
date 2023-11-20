import { doc, setDoc } from 'firebase/firestore';
import type { FC } from 'react';

import type { Contact, Purchase } from '@/@types';
import { SplitCheckbox } from '@/components/ui/SplitCheckbox';
import { db } from '@/firebase/firebase.config';
import useAppContext from '@/hooks/useAppContext';
import { getEvenSplit, updateContactsSplit } from '@/lib/utils';

type ContactSplitCheckboxProps = {
  contact: Contact;
  purchase: Purchase;
  splitValue: string | undefined;
};

const ContactSplitCheckbox: FC<ContactSplitCheckboxProps> = ({
  contact,
  purchase,
  splitValue,
}) => {
  const { state, dispatch } = useAppContext();

  function handleCheckedChange(checked: boolean | 'indeterminate') {
    if (checked === 'indeterminate') return;

    const updatedSplit = updateContactsSplit(
      {
        [contact.id]: checked ? 1 : 0,
      },
      purchase.split
    );

    const updatedEvenSplit = getEvenSplit(updatedSplit);

    const accountRef = doc(
      db,
      `accounts/${purchase.accountId}/purchases/`,
      purchase.id
    );

    setDoc(
      accountRef,
      {
        ...purchase,
        split: updatedEvenSplit,
      },
      { merge: checked }
    ).catch((error) => console.error('Error writing document: ', error));
  }

  return (
    <SplitCheckbox
      onCheckedChange={(checked) => handleCheckedChange(checked)}
      checked={Boolean(splitValue)}
      className="border-input flex h-9 w-40 items-center justify-center px-3 py-2 text-sm font-light"
    >
      {splitValue ? (
        <span className="text-emerald-300">{`${+splitValue * 100}% ($${(
          purchase.amount * +splitValue
        ).toFixed(2)})`}</span>
      ) : (
        'Add Split'
      )}
    </SplitCheckbox>
  );
};

export default ContactSplitCheckbox;
