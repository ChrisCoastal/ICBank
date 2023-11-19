'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { nanoid } from 'nanoid';
import useAppContext from '@/hooks/useAppContext';

type Props = {};

const SplitDetails = (props: Props) => {
  const { state, dispatch } = useAppContext();
  const { selectedSplitContacts } = state;

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          {/* <CardTitle>{purchase?.amount}</CardTitle>
    <CardDescription>{purchase?.location}</CardDescription> */}
        </CardHeader>
        <CardContent>
          {selectedSplitContacts.length > 0
            ? selectedSplitContacts.map((contact) => {
                return <p key={nanoid()}>{contact}</p>;
              })
            : null}
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default SplitDetails;
