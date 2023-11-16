// 'use client';

import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import Contact from '@/components/Contact/Contact';
import { notFound, usePathname } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { nanoid } from 'nanoid';
import { Purchase } from '@/@types';
import useAppContext from '@/hooks/useAppContext';

type PurchaseProps = {
  purchase: Purchase;
};

const Page: FC<PurchaseProps> = () => {
  // const { state, dispatch } = useAppContext();
  // const pathId = usePathname().split('/').pop();
  // const [accountName, purchase] = pathId?.split('&')!;
  // const project = Object.values(state.accounts).find(
  //   (account) => account.name === pathId
  // );

  // useEffect(() => {
  //   if (!project) notFound();
  // }, [project]);

  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  const contacts = [
    {
      name: 'Jacob',
      email: 'jacob@email.com',
      phone: '555 555 1234',
      avatar: '',
    },
    {
      name: 'Victor',
      email: 'victor@email.com',
      phone: '555 555 1234',
      avatar: '',
    },
    {
      name: 'Chris',
      email: 'chris@email.com',
      phone: '555 555 1234',
      avatar: '',
    },
    {
      name: 'LTJ Bukem',
      email: 'ltj@email.com',
      phone: '555 555 1234',
      avatar: '',
    },
    {
      name: 'Stevie Hyper D',
      email: 'stevieh@email.com',
      phone: '555 555 1234',
      avatar: '',
    },
  ];

  function handleSelect(name: string) {
    if (selectedContacts.includes(name)) {
      setSelectedContacts(
        selectedContacts.filter((contact) => contact !== name)
      );
    } else {
      setSelectedContacts([...selectedContacts, name]);
    }
  }

  return (
    <div className="mx-4">
      <h2 className="font-bold">Split Bill</h2>
      <Card className="mb-8">
        <CardHeader>
          {/* <CardTitle>{purchase?.amount}</CardTitle>
          <CardDescription>{purchase?.location}</CardDescription> */}
        </CardHeader>
        <CardContent>
          {selectedContacts.length > 0
            ? selectedContacts.map((contact) => {
                return <p key={nanoid()}>{contact}</p>;
              })
            : null}
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <ul className="flex flex-col gap-2">
        {contacts.map((contact) => {
          return (
            <li key={nanoid()}>
              <Contact
                contact={contact}
                selected={selectedContacts.includes(contact.name)}
                onSelect={handleSelect}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
