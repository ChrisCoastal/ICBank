import Link from 'next/link';
import type { FC } from 'react';

import { Button } from '@/components/ui/Button';
import BaseIcon from '@/components/ui/icons/BaseIcon';

type PurchaseListItemActionsProps = {
  account: string;
  purchaseId: string;
};

const PurchaseListItemActions: FC<PurchaseListItemActionsProps> = ({
  account,
  purchaseId,
}) => {
  return (
    <ul className="flex gap-4 self-end">
      <li>
        <Button
          variant="outline"
          className="group h-10 w-10 rounded-sm border-white/60 transition-all duration-200 hover:border-emerald-300"
        >
          <Link href={`/purchase/split/${account}&${purchaseId}`}>
            <BaseIcon
              path="splitBill"
              height="28"
              width="28"
              className="fill-white transition-all duration-200 group-hover:fill-emerald-300"
            />
          </Link>
        </Button>
      </li>
      <li>
        <Button
          variant="outline"
          className="group h-10 w-10 rounded-sm border-white/60 transition-all duration-200 hover:border-emerald-300"
        >
          <Link href="">
            <BaseIcon
              path="addPhoto"
              height="28"
              width="28"
              className="fill-white transition-all duration-200 group-hover:fill-emerald-300"
            />
          </Link>
        </Button>
      </li>
    </ul>
  );
};

export default PurchaseListItemActions;
