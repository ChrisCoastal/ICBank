'use client';
import type { FC } from 'react';

import SplitContactsTitle from '@/components/SplitDetailCard/SplitContactsTitle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import useAppContext from '@/hooks/useAppContext';

type SplitContactProps = {
  splitContacts: [string, number][];
  splitAmount: number;
};

const gridAreas = [
  'col-start-9 col-end-12 z-[25]',
  'col-start-7 col-end-10 z-[24]',
  'col-start-5 col-end-8 z-[23]',
  'col-start-3 col-end-6 z-[22]',
  'col-start-1 col-end-4 z-[21]',
];

const SplitContacts: FC<SplitContactProps> = ({
  splitContacts,
  splitAmount,
}) => {
  const { state } = useAppContext();
  const contacts = state.contacts;
  const splitCount = splitContacts.length;

  return (
    <>
      {splitCount ? (
        <div className="flex flex-col items-end self-end">
          <SplitContactsTitle
            splitCount={splitCount}
            splitAmount={splitAmount}
          />

          <div className="col grid grid-cols-[repeat(11,_20px)] grid-rows-1">
            {splitContacts.map((splitContact, i) => {
              const contactId = splitContact[0];
              const contact = contacts[contactId];
              return (
                <div
                  key={contact.avatar}
                  className={`${gridAreas[i]} animate-fade-in relative row-start-1 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 p-0.5 hover:z-[26]`}
                >
                  <Avatar className="h-14 w-14 self-end">
                    <AvatarImage src={contact.avatar} />
                    <AvatarFallback>
                      {contact.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SplitContacts;
