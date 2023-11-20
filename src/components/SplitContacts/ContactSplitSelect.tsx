'use client';
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
import useAppContext from '@/hooks/useAppContext';
import { getSplitSelectItems, getUserSplit } from '@/lib/utils';

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
  const { dispatch } = useAppContext();

  const userSplit = getUserSplit(purchase.split);
  const splitEven = purchase.splitEven;
  const contactSplitAmount = splitValue ? +splitValue : undefined;
  const splitSelectItems = getSplitSelectItems(
    splitAmounts,
    contactSplitAmount
  );

  function handleSelect(selectValue: string) {
    dispatch({
      type: 'TOGGLE_SPLIT_CONTACT',
      payload: { contactId: contact.id, purchase, splitPercent: +selectValue },
    });
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
            {splitAmounts.map((splitAmount) => {
              console.log(userSplit);
              const splitAmountValue = splitAmount.toString();
              const splitAmountPercent = splitAmount * 100;
              const splitAmountTotal = purchase.amount * splitAmount;

              return (
                <SelectItem
                  key={splitAmountValue}
                  value={splitAmountValue}
                  disabled={splitAmount > userSplit}
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
