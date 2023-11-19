import type { FC } from 'react';

import type { Purchase } from '@/@types';
import { AccordionTrigger } from '@/components/ui/Accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';

type PurchaseListItemProps = {
  purchase: Purchase;
};

const PurchaseListItem: FC<PurchaseListItemProps> = ({ purchase }) => {
  return (
    <AccordionTrigger>
      <div className="mr-4 flex w-full justify-between">
        <div className="flex items-center justify-between gap-2">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-gradient-to-br from-red-500 to-violet-800 text-xl font-medium">
              $
            </AvatarFallback>
          </Avatar>
          <p className="inline">{purchase.location}</p>
        </div>
        <div className="flex w-36 items-center justify-between">
          <div className="font-bold">{`$${purchase.amount.toFixed(2)}`}</div>
          <Badge variant="outline" className="border-white/20">
            {purchase.type}
          </Badge>
        </div>
      </div>
    </AccordionTrigger>
  );
};

export default PurchaseListItem;
