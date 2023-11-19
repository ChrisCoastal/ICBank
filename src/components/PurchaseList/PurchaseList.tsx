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
              <AccordionItem value={key} className="mx-6 my-2">
                <AccordionTrigger>
                  <div className="flex flex-row gap-2 ">
                    <div>
                      <div className="h-6 w-6 rounded-full bg-stone-500" />
                    </div>
                    <div className="w-36">{purchase.location}</div>
                    <div className="w-56"></div>
                    <div>{purchase.amount}</div>
                    <div>{purchase.type}</div>
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
