import type { FC } from 'react';

import type { Contact } from '@/@types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

type ContactAvatarProps = {
  contact: Contact;
};

const ContactAvatar: FC<ContactAvatarProps> = ({ contact }) => {
  return (
    <div className="flex gap-4">
      <div className="rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 p-0.5">
        <Avatar>
          <AvatarImage src={contact.avatar} />
          <AvatarFallback>
            {contact.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="my-auto text-base">{contact.name}</div>
    </div>
  );
};

export default ContactAvatar;
