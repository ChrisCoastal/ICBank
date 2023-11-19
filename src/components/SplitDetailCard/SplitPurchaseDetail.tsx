import type { FC } from 'react';

import type { Purchase } from '@/@types';
import { Badge } from '@/components/ui/Badge';
import { CardHeader, CardTitle } from '@/components/ui/Card';

type SplitPurchaseDetailProps = {
  purchase: Purchase;
};

const SplitPurchaseDetail: FC<SplitPurchaseDetailProps> = ({ purchase }) => {
  return (
    <CardHeader>
      <div>
        <div className="mb-1 flex gap-2 text-lg font-bold text-white">
          {purchase.location}
          <Badge variant="outline" className="border-white/20">
            {purchase.type}
          </Badge>
        </div>
        <div className="text-xs font-light opacity-60">{purchase.date}</div>
      </div>
      <div className="flex items-end gap-2">
        <CardTitle className="text-4xl font-bold text-emerald-300">
          {`$${purchase.amount.toFixed(2)}`}
        </CardTitle>
      </div>
    </CardHeader>
  );
};

export default SplitPurchaseDetail;
