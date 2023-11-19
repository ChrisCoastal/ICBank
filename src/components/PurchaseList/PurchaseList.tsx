'use client';

import { nanoid } from 'nanoid';
import type { FC } from 'react';

import PurchaseListItem from '@/components/PurchaseList/PurchaseListItem';
import PurchaseListItemDetail from '@/components/PurchaseList/PurchaseListItemDetail';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import useAppContext from '@/hooks/useAppContext';

import PurchaseDate from './PurchaseDate';

type PurchaseListProps = {
  account: string;
};

const PurchaseList: FC<PurchaseListProps> = ({ account }) => {
  const { state } = useAppContext();
  const { accounts } = state;
  const purchaseData = Object.values(accounts[account]?.purchases);

  return (
    <div>
      <Accordion type="single" collapsible>
        {purchaseData ? (
          purchaseData.map((purchase, i) => {
            const key = nanoid();
            return (
              <div key={key}>
                <PurchaseDate
                  date={purchase.date}
                  prevDate={purchaseData[i - 1]?.date}
                />
                <AccordionItem value={key} className="mx-2 p-2">
                  <PurchaseListItem purchase={purchase} />
                  <PurchaseListItemDetail
                    account={account}
                    purchase={purchase}
                  />
                </AccordionItem>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center">
            <Badge variant="outline" className="font-medium text-white">
              No purchases
            </Badge>
          </div>
        )}
      </Accordion>
    </div>
  );
};

export default PurchaseList;
