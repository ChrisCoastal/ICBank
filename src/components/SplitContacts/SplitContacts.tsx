import type { FC } from 'react';

import type { Purchase } from '@/@types';
import ContactSplitEvenly from '@/components/SplitContacts/ContactSplitEvenly';
import SplitContactsList from '@/components/SplitContacts/SplitContactsList';
import { Badge } from '@/components/ui/Badge';
import useAppContext from '@/hooks/useAppContext';

type ContactListProps = {
  purchase: Purchase;
};

const ContactList: FC<ContactListProps> = ({ purchase }) => {
  const { state } = useAppContext();

  return (
    <div>
      <div className="flex items-center justify-between">
        <Badge className="mb-2 mt-2 w-40 bg-emerald-300">Recent Contacts</Badge>
        <ContactSplitEvenly purchase={purchase} />
      </div>
      <SplitContactsList contacts={state.contacts} purchase={purchase} />
    </div>
  );
};

export default ContactList;
