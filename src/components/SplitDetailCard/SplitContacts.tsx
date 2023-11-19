'use client';
import type { FC } from 'react';

import SplitContactsTitle from '@/components/SplitDetailCard/SplitContactsTitle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import useAppContext from '@/hooks/useAppContext';

type SplitContactProps = {
  splitContacts: [string, number][];
};

const SplitContacts: FC<SplitContactProps> = ({ splitContacts }) => {
  const { state } = useAppContext();
  const contacts = state.contacts;
  const splitCount = splitContacts.length;

  return (
    <>
      {splitCount ? (
        <div className="flex flex-col items-end self-end">
          <SplitContactsTitle splitCount={splitCount} />

          <div className="flex justify-end">
            {splitContacts.map((splitContact, i) => {
              const contactId = splitContact[0];
              const contact = contacts[contactId];
              const splitPercent = splitContact[1];
              return (
                <div
                  key={contact.avatar}
                  className={`animate-fade-in rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 p-0.5`}
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
