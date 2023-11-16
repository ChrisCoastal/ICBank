import React from 'react';
import type { FC } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Contact } from '@/@types';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';

type ContactProps = {
  contact: Contact;
  selected: boolean;
  onSelect: (name: string) => void;
};

const Contact: FC<ContactProps> = ({ contact, selected, onSelect }) => {
  const buttonColor = selected && 'bg-cyan-100';

  return (
    <Button
      className={`${buttonColor} w-full`}
      onClick={() => onSelect(contact.name)}
    >
      <div className="w-full flex justify-between">
        {/* <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>{'c'}</AvatarFallback>
        </Avatar> */}
        <div>{contact.name}</div>
      </div>
    </Button>
  );
};

export default Contact;
