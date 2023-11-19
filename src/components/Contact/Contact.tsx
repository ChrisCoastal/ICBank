import type { FC } from 'react';

import type { Contact } from '@/@types';
import { Avatar, AvatarFallback,AvatarImage } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

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
        <div className="w-full flex items-center justify-between my-4">
          <div className="flex gap-4">
            <div className="rounded-full p-0.5 bg-gradient-to-br from-emerald-300 to-emerald-500">
              <Avatar>
                <AvatarImage src={contact.avatar} />
                <AvatarFallback>
                  {contact.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="text-base my-auto">{contact.name}</div>
          </div>
          <Select
            onValueChange={(value) => onSelect(value, contact)}
            value={selectValue}
          >
            <SelectTrigger className="w-40 font-light">
              <SelectValue placeholder="Add Split" />
            </SelectTrigger>
            <SelectContent>
              {selectValue ? (
                <SelectItem value="0" className="flex gap-8">
                  <span className="text-emerald-300">{`Undo split`}</span>
                </SelectItem>
              ) : null}
              <SelectItem value="25" className="flex gap-8">
                <span className="text-emerald-300">{`25% ($${(
                  purchaseAmount * 0.25
                ).toFixed(2)})`}</span>
              </SelectItem>
              <SelectItem value="50">
                <span className="text-emerald-300">{`50% ($${(
                  purchaseAmount * 0.5
                ).toFixed(2)})`}</span>
              </SelectItem>
              <SelectItem value="75">
                <span className="text-emerald-300">{`75% ($${(
                  purchaseAmount * 0.75
                ).toFixed(2)})`}</span>
              </SelectItem>
              <SelectItem value="100">
                <span className="text-emerald-300">{`100% ($${purchaseAmount.toFixed(
                  2
                )})`}</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Badge>
    </>
  );
};

export default Contact;
