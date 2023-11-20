import { nanoid } from 'nanoid';
import type { FC } from 'react';

import type { Contact, Purchase } from '@/@types';
import SplitContact from '@/components/SplitContacts/SplitContact';

type SplitContactsListProps = {
  contacts: Record<string, Contact>;
  purchase: Purchase;
};

const SplitContactsList: FC<SplitContactsListProps> = ({
  contacts,
  purchase,
}) => {
  return (
    <ul className="flex flex-col gap-2">
      {Object.values(contacts).map((contact) => {
        return (
          <li key={nanoid()}>
            <SplitContact contact={contact} purchase={purchase} />
          </li>
        );
      })}
    </ul>
  );
};

export default SplitContactsList;
