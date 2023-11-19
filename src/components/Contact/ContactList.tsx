import { nanoid } from 'nanoid';
import type { FC } from 'react';

import type { Purchase } from '@/@types';
import Contact from '@/components/Contact/Contact';
import { Badge } from '@/components/ui/Badge';
import useAppContext from '@/hooks/useAppContext';

type ContactListProps = {
  purchase: Purchase;
};

const ContactList: FC<ContactListProps> = ({ purchase }) => {
  const { state, dispatch } = useAppContext();
  const { contacts, accounts } = state;
  const account = accounts[purchase.accountName];
  const contactData = Object.values(contacts);

  function handleSelect(value: string, contact: Contact) {
    dispatch({
      type: 'TOGGLE_SPLIT_CONTACT',
      payload: { contactId: contact.id, purchase, splitPercent: +value },
    });
  }

  return (
    <div>
      <div>
        <Badge className="mb-2 mt-2 w-52 bg-emerald-300">Recent Contacts</Badge>
      </div>
      <ul className="flex flex-col gap-2">
        {contactData.map((contact) => {
          const selected = Boolean(
            account.purchases[purchase.id]?.split[contact.id]
          );
          return (
            <li key={nanoid()}>
              <Contact
                contact={contact}
                selected={selected}
                purchaseAmount={purchase.amount}
                splitPercent={purchase.split[contact.id]}
                onSelect={handleSelect}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
