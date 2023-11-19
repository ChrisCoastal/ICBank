import type { FC } from 'react';

import type { Contact } from '@/@types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

type ContactSplitSelectProps = {
  contact: Contact;
  selectValue: string | undefined;
  purchaseAmount: number;
  onSelect: (value: string, contact: Contact) => void;
};

const ContactSplitSelect: FC<ContactSplitSelectProps> = ({
  contact,
  selectValue,
  purchaseAmount,
  onSelect,
}) => {
  return (
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
  );
};

export default ContactSplitSelect;
