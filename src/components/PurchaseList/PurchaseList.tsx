import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { nanoid } from 'nanoid';

type Props = {};

type Purchase = {
  type: string;
  location: string;
  date: string;
  amount: number;
  description: string;
};

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
                <AccordionContent>{purchase.description}</AccordionContent>
              </AccordionItem>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
};

export default PurchaseList;
