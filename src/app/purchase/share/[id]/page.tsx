import React from 'react';
import Contact from '@/components/Contact/Contact';

type Props = {};

const Page = (props: Props) => {
  const contacts = ['Jacob', 'Victor', 'Chris', 'LTJ Bukem', 'Stevie Hyper D'];

  return (
    <div>
      <Contact />
    </div>
  );
};

export default Page;
