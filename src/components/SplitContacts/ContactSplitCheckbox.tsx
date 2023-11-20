import type { FC } from 'react';

import type { Contact, Purchase } from '@/@types';
import { SplitCheckbox } from '@/components/ui/SplitCheckbox';
import useAppContext from '@/hooks/useAppContext';

type ContactSplitCheckboxProps = {
  contact: Contact;
  purchase: Purchase;
  splitValue: string | undefined;
};

const ContactSplitCheckbox: FC<ContactSplitCheckboxProps> = ({
  contact,
  purchase,
  splitValue,
}) => {
  const { state, dispatch } = useAppContext();

  function handleCheckedChange(checked: boolean | 'indeterminate') {
    dispatch({
      type: 'TOGGLE_SPLIT_CONTACT',
      payload: { contactId: contact.id, purchase, splitPercent: 0.01 },
    });
  }

  return (
    <SplitCheckbox
      onCheckedChange={(checked) => handleCheckedChange(checked)}
      className="border-input flex h-9 w-40 items-center justify-center px-3 py-2 text-sm font-light"
    >
      {splitValue ?? 'Add Split'}
    </SplitCheckbox>
  );
};

export default ContactSplitCheckbox;
