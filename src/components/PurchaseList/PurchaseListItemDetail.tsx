import type { FC } from 'react';

import type { Purchase } from '@/@types';
import PurchaseListItemActions from '@/components/PurchaseList/PurchaseListItemActions';
import { AccordionContent } from '@/components/ui/Accordion';

type PurchaseListItemDetailProps = {
  account: string;
  purchase: Purchase;
};

const PurchaseListItemDetail: FC<PurchaseListItemDetailProps> = ({
  account,
  purchase,
}) => {
  return (
    <AccordionContent>
      <div className="flex items-center justify-between">
        <div className="ml-8">{purchase.description}</div>
        <PurchaseListItemActions account={account} purchaseId={purchase.id} />
      </div>
    </AccordionContent>
  );
};

export default PurchaseListItemDetail;
