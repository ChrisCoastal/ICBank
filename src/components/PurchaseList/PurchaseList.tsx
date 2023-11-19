import React from 'react';
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

type Props = {};

const PurchaseList = (props: Props) => {
  const purchaseData = [
    {
      type: 'Food',
      location: 'Tap and Barrel',
      date: '2023-11-15',
      amount: 60.99,
      description: 'Drinks with friends',
    },
    {
      type: 'Food',
      location: 'Tap and Barrel',
      date: '2023-11-15',
      amount: 150.99,
      description: 'Drinks with friends',
    },
  ];
  return (
    <div>
      <ul>
        <Accordion type="single" collapsible className="w-full">
          {purchaseData.map((purchase) => {
            const key = nanoid();
            return (
              <div key={key} className="">
                <AccordionItem value={key} className="mx-2 p-2">
                  <AccordionTrigger>
                    <div className="flex flex-row justify-between w-5/6">
                      <div className="flex flex-row items-center justify-between">
                        <span className="h-8 w-8 rounded-full bg-stone-500 mr-4" />
                        <p className="inline">{purchase.location}</p>
                      </div>
                      <div className="flex flex-row items-center justify-between gap-8">
                        <div className="">{purchase.amount}</div>
                        <div className="">{purchase.type}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-row justify-between">
                      <div className="rounded-md bg-cyan-300 aspect-square w-1/4">
                        location
                      </div>
                      {purchase.description}

                      <div className="self-end">
                        <ul className="flex flex-row gap-4 ">
                          <Button className="rounded-sm h-10 w-10 bg-cyan-300">
                            <Link href={`/purchase/share/${key}`}>
                              <SharePurchaseIcon height="36" width="36" />
                            </Link>
                          </Button>
                          <Button className="rounded-sm h-10 w-10 bg-cyan-300"></Button>
                          <Button className="rounded-sm h-10 w-10 bg-cyan-300"></Button>
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
