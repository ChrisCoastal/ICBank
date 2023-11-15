'use client';

import Link from 'next/link';
import React from 'react';

type Props = {};

const error = (props: Props) => {
  return (
    <div className="bg-black flex gap-8 items-center justify-center">
      <p>Sorry, this is not cool...</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default error;
