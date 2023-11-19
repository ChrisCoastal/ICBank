import type { FC } from 'react';

import type { Purchase } from '@/@types';
import SplitContacts from '@/components/SplitDetailCard/SplitContacts';
import SplitPurchaseDetail from '@/components/SplitDetailCard/SplitPurchaseDetail';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Card, CardContent } from '@/components/ui/Card';

type SplitDetailsProps = {
  purchase: Purchase;
};

const SplitDetails: FC<SplitDetailsProps> = ({ purchase }) => {
  const splitContacts = Object.entries(purchase.split);

  return (
    <div className="relative mb-4">
      {purchase ? (
        <Card className="mb-1 bg-gradient-to-br from-red-500 to-violet-800">
          <SplitPurchaseDetail purchase={purchase} />
          <CardContent>
            <div className="flex justify-between">
              <div className="rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 p-1">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={'/assets/bear-avatar.png'} />
                  <AvatarFallback>CB</AvatarFallback>
                </Avatar>
              </div>
              <SplitContacts splitContacts={splitContacts} />
            </div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};

export default SplitDetails;
