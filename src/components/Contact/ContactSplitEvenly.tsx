import type { FC } from 'react';
import { useRef } from 'react';

import type { Purchase } from '@/@types';
import { Label } from '@/components/ui/Label';
import { Switch } from '@/components/ui/Switch';
import useAppContext from '@/hooks/useAppContext';

type ContactSplitEvenlyProps = {
  purchase: Purchase;
};

const ContactSplitEvenly: FC<ContactSplitEvenlyProps> = ({ purchase }) => {
  const { state, dispatch } = useAppContext();
  const switchRef = useRef<HTMLButtonElement>(null);

  function handleClick() {
    console.log(switchRef.current?.getAttribute('data-state'));
    const splitEven =
      switchRef.current?.getAttribute('data-state') === 'checked';
    dispatch({
      type: 'TOGGLE_SPLIT_EVENLY',
      payload: { splitEven, purchase },
    });
  }

  return (
    <div className="mr-2 flex items-center gap-2">
      <Switch ref={switchRef} id="split-even" onCheckedChange={handleClick} />
      <Label htmlFor="split-even" className="font-light">
        Split Evenly
      </Label>
    </div>
  );
};

export default ContactSplitEvenly;
