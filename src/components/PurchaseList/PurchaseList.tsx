import React from 'react';
import type { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { nanoid } from 'nanoid';
import { Button } from '@/components/ui/Button';
import SharePurchaseIcon from '@/components/ui/icons/SharePurchaseIcon';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';

type PurchaseListProps = {
  account: string;
};

const PurchaseList: FC<PurchaseListProps> = ({ account }) => {
  const purchaseData = [
    {
      type: 'Food',
      location: 'Tap and Barrel',
      date: 'Wednesday November 15, 2023',
      amount: 60.99,
      description: 'Drinks with friends',
    },
    {
      type: 'Food',
      location: 'Tap and Barrel',
      date: 'Wednesday November 15, 2023',
      amount: 150.99,
      description: 'Drinks with friends',
    },
    {
      type: 'Food',
      location: 'Nemesis Polygon',
      date: 'Wednesday November 15, 2023',
      amount: 23.99,
      description: 'Coffee',
    },
    {
      type: 'Food',
      location: 'Nook',
      date: 'Tuesday November 14, 2023',
      amount: 23.99,
      description: 'Pizza',
    },
    {
      type: 'Food',
      location: 'Nook',
      date: 'Sunday November 12, 2023',
      amount: 23.99,
      description: 'Pizza',
    },
  ];
  return (
    <div>
      <ul>
        <Accordion type="single" collapsible className="w-full">
          {purchaseData.map((purchase, i) => {
            let date = purchase.date;
            const key = nanoid();
            return (
              <div key={key}>
                {purchase.date !== purchaseData[i - 1]?.date ? (
                  <Badge className="ml-2 mt-2 pr-12">{purchase.date}</Badge>
                ) : null}
                <AccordionItem value={key} className="mx-2 p-2">
                  <AccordionTrigger>
                    <div className="flex justify-between w-5/6">
                      <div className="flex items-center justify-between gap-4">
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback>$$</AvatarFallback>
                        </Avatar>
                        <p className="inline">{purchase.location}</p>
                      </div>
                      <div className="flex  items-center justify-between gap-8">
                        <div className="">{purchase.amount}</div>
                        <Badge className="">{purchase.type}</Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex  justify-between">
                      <div className="rounded-md bg-stone-300 aspect-square w-1/4">
                        location
                      </div>
                      {purchase.description}

                      <div className="self-end">
                        <ul className="flex  gap-4 ">
                          <Button className="rounded-sm h-10 w-10 bg-stone-300">
                            <Link href={`/purchase/split/${key}`}>
                              <SharePurchaseIcon height="36" width="36" />
                            </Link>
                          </Button>
                          <Button className="rounded-sm h-10 w-10 bg-stone-300"></Button>
                          <Button className="rounded-sm h-10 w-10 bg-stone-300"></Button>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>
      </ul>
    </div>
  );
};

export default PurchaseList;
