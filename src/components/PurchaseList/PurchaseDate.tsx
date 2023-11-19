import { FC } from 'react';

import { Badge } from '@/components/ui/Badge';

type PurchaseDateProps = {
  date: string;
  prevDate: string;
};

const PurchaseDate: FC<PurchaseDateProps> = ({ date, prevDate }) => {
  const show = date !== prevDate;
  return (
    <>
      {show ? (
        <Badge className="mx-2 mt-2 w-60 bg-gradient-to-br from-emerald-200 to-emerald-400">
          {date}
        </Badge>
      ) : null}
    </>
  );
};

export default PurchaseDate;
