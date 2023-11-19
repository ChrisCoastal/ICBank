import type { FC } from 'react';

import type { Contact } from '@/@types';
import ContactAvatar from '@/components/Contact/ContactAvatar';
import ContactSplitSelect from '@/components/Contact/ContactSplitSelect';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';

type ContactProps = {
  contact: Contact;
  purchaseAmount: number;
  splitPercent: number;
  selected: boolean;
  onSelect: (value: string, contact: Contact) => void;
};

const Contact: FC<ContactProps> = ({
  contact,
  purchaseAmount,
  splitPercent,
  selected,
  onSelect,
}) => {
  const contactBorder = selected
    ? 'border-emerald-300 border-2'
    : 'border-white/60';
  const selectValue = splitPercent ? splitPercent.toString() : undefined;
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
            selectValue={selectValue}
            purchaseAmount={purchaseAmount}
            onSelect={onSelect}
          />
        </div>
      </Badge>
    </>
  );
};

export default Contact;
