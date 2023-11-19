'use client';

import { nanoid } from 'nanoid';
import Link from 'next/link';
import type { FC } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import AddPhotoIcon from '@/components/ui/icons/AddPhotoIcon';
import SharePurchaseIcon from '@/components/ui/icons/SharePurchaseIcon';
import useAppContext from '@/hooks/useAppContext';

type PurchaseListProps = {
  account: string;
};

const PurchaseList: FC<PurchaseListProps> = ({ account }) => {
  const { state, dispatch } = useAppContext();
  const { accounts } = state;
  const purchaseData = Object.values(accounts[account]?.purchases);

  return (
    <div>
      <ul>
        <Accordion type="single" collapsible>
          {purchaseData ? (
            purchaseData.map((purchase, i) => {
              let date = purchase.date;
              const key = nanoid();
              return (
                <div key={key}>
                  {purchase.date !== purchaseData[i - 1]?.date ? (
                    <Badge className="mx-2 mt-2 w-72 bg-gradient-to-br from-emerald-200 to-emerald-400">
                      {purchase.date}
                    </Badge>
                  ) : null}
                  <AccordionItem value={key} className="mx-2 p-2">
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
                          <div className="font-bold">{`$${purchase.amount.toFixed(
                            2
                          )}`}</div>
                          <Badge variant="outline" className="border-white/20">
                            {purchase.type}
                          </Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex items-center justify-between">
                        <div className="ml-8">{purchase.description}</div>
                        <div className="self-end">
                          <ul className="flex gap-4">
                            <Button
                              variant="outline"
                              className="group h-10 w-10 rounded-sm border-white/60 transition-all duration-200 hover:border-emerald-300"
                            >
                              <Link
                                href={`/purchase/split/${account}&${purchase.id}`}
                              >
                                <SharePurchaseIcon
                                  height="28"
                                  width="28"
                                  className="fill-white transition-all duration-200 group-hover:fill-emerald-300"
                                />
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="group h-10 w-10 rounded-sm border-white/60 transition-all duration-200 hover:border-emerald-300"
                            >
                              <Link href="">
                                <AddPhotoIcon
                                  height="28"
                                  width="28"
                                  className="fill-white transition-all duration-200 group-hover:fill-emerald-300"
                                />
                              </Link>
                            </Button>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
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
      </ul>
    </div>
  );
};

export default PurchaseList;
