'use client';
import { doc, setDoc } from 'firebase/firestore';
import type { FC } from 'react';

import type { Contact, Purchase } from '@/@types';
import ContactSplitCheckbox from '@/components/SplitContacts/ContactSplitCheckbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { db } from '@/firebase/firebase.config';
import {
  getSplitSelectItems,
  getUserSplit,
  updateContactsSplit,
} from '@/lib/utils';

type ContactSplitSelectProps = {
  contact: Contact;
  purchase: Purchase;
  splitValue: string | undefined;
};

const splitAmounts = [0.15, 0.25, 0.5, 0.75, 1];

const ContactSplitSelect: FC<ContactSplitSelectProps> = ({
  contact,
  purchase,
  splitValue,
}) => {
  const userSplit = getUserSplit(purchase.split);
  const contactSplitAmount = splitValue ? +splitValue : undefined;
  const availableSplitAmount = userSplit + (contactSplitAmount || 0);
  const splitSelectItems = getSplitSelectItems(
    splitAmounts,
    contactSplitAmount
  );

  async function handleSelect(selectValue: string) {
    const updatedSplit = updateContactsSplit(
      { [contact.id]: +selectValue },
      purchase.split
    );

    const accountRef = doc(
      db,
      `accounts/${purchase.accountId}/purchases/`,
      purchase.id
    );

    setDoc(
      accountRef,
      { ...purchase, split: updatedSplit },
      { merge: Boolean(updatedSplit[contact.id]) }
    ).catch((error) => console.error('Error writing document: ', error));
  }

  return (
    <>
      {purchase.splitEven ? (
        <ContactSplitCheckbox
          splitValue={splitValue}
          purchase={purchase}
          contact={contact}
        />
      ) : (
        <Select
          onValueChange={(value) => handleSelect(value)}
          value={splitValue}
        >
          <SelectTrigger className="w-40 font-light">
            <SelectValue placeholder="Add Split" />
          </SelectTrigger>
          <SelectContent>
            {splitValue ? (
              <SelectItem value="0" className="flex gap-8">
                <span className="text-emerald-300">{`Undo split`}</span>
              </SelectItem>
            ) : null}
            {splitSelectItems.map((splitAmount) => {
              const splitAmountValue = splitAmount.toString();
              const splitAmountPercent = splitAmount * 100;
              const splitAmountTotal = purchase.amount * splitAmount;

              return (
                <SelectItem
                  key={splitAmountValue}
                  value={splitAmountValue}
                  disabled={splitAmount > availableSplitAmount}
                >
                  <span className="text-emerald-300">{`${splitAmountPercent}% ($${splitAmountTotal.toFixed(
                    2
                  )})`}</span>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      )}
    </>
  );
};

export default ContactSplitSelect;
