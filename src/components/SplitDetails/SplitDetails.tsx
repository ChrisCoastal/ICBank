'use client';

import type { FC } from 'react';

import type { Purchase } from '@/@types';
import { Avatar, AvatarFallback,AvatarImage } from '@/components/ui/Avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import useAppContext from '@/hooks/useAppContext';

import { Badge } from '../ui/Badge';

type SplitDetailsProps = {
  purchase: Purchase;
};

const SplitDetails: FC<SplitDetailsProps> = ({ purchase }) => {
  const splitContacts = Object.entries(purchase.split);
  const splitCount = splitContacts.length;
  const { state } = useAppContext();
  const contacts = state.contacts;

  return (
    <div className="mb-4 relative">
      {purchase ? (
        <Card className="mb-1 bg-gradient-to-br from-red-500 to-violet-800">
          <CardHeader>
            <div>
              <div className="font-bold text-lg text-white flex gap-2 mb-1">
                {purchase.location}
                <Badge variant="outline" className="border-white/20">
                  {purchase.type}
                </Badge>
              </div>
              <div className="text-xs font-light opacity-60">
                {purchase.date}
              </div>
            </div>
            <div className="flex gap-2 items-end">
              <CardTitle className="font-bold text-4xl text-emerald-300">
                {`$${purchase.amount.toFixed(2)}`}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <div className="rounded-full p-1 bg-gradient-to-br from-emerald-300 to-emerald-500">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={'/assets/bear-avatar.png'} />
                  <AvatarFallback>CB</AvatarFallback>
                </Avatar>
              </div>
              {splitCount ? (
                <div className="self-end flex flex-col items-end">
                  {splitCount ? (
                    <div className="text-xs font-light opacity-60 pb-1 pr-2">
                      {`Split with ${splitCount} other${
                        splitCount > 1 ? 's' : ''
                      }`}
                    </div>
                  ) : null}
                  <div className="flex justify-end">
                    {splitContacts.map((splitContact, i) => {
                      const contactId = splitContact[0];
                      const contact = contacts[contactId];
                      const splitPercent = splitContact[1];
                      const translate = 2 * (i + 1);
                      return (
                        <div
                          key={contact.avatar}
                          className={`-translate-x-[${translate}] rounded-full p-0.5 bg-gradient-to-br from-emerald-300 to-emerald-500 animate-fade-in`}
                        >
                          <Avatar className="self-end h-14 w-14">
                            <AvatarImage src={contact.avatar} />
                            <AvatarFallback>
                              {contact.name.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};

export default SplitDetails;
