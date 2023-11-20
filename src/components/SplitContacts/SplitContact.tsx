import type { FC } from 'react';
import memo from 'react';

import type { Contact, Purchase } from '@/@types';
import ContactAvatar from '@/components/SplitContacts/ContactAvatar';
import ContactSplitSelect from '@/components/SplitContacts/ContactSplitSelect';
import { Badge } from '@/components/ui/Badge';
import { getUserSplit } from '@/lib/utils';

type ContactProps = {
  contact: Contact;
  purchase: Purchase;
};

const Contact: FC<ContactProps> = ({ contact, purchase }) => {
  const userSplit = getUserSplit(purchase.split);
  const contactSplit = purchase.split[contact.id];
  const splitValue = contactSplit ? contactSplit.toString() : undefined;
  const contactBorder = Boolean(contactSplit)
    ? 'border-emerald-300 outline outline-1 outline-emerald-300'
    : 'border-white/60';

  return (
    <>
      <Badge
        variant={'outline'}
        className={`${contactBorder} group w-full hover:border-emerald-300`}
      >
        <div className="my-4 flex w-full items-center justify-between">
          <ContactAvatar name={contact.name} avatarUrl={contact.avatar} />
          <ContactSplitSelect
            contact={contact}
            splitValue={splitValue}
            purchase={purchase}
          />
        </div>
      </Badge>
    </>
  );
};

export default Contact;
