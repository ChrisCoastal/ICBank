import React from 'react';

type Props = {};

const Header = (props: Props) => {
  <div className="mx-4 mb-4 flex max-w-5xl justify-end gap-2 lg:mx-auto lg:pr-4">
    <CheckIcon className="fill-emerald-300" height="40" width="40" />
    <h2 className="text-4xl font-bold text-emerald-300">Accounts</h2>
  </div>;
  return (
    <div className="mx-2 mb-4 flex max-w-5xl items-center justify-between lg:mx-auto lg:px-4">
      <div className="group my-auto rounded-full bg-emerald-300/95 p-2 transition-all duration-200 hover:bg-emerald-300">
        <Link href="/" className="w-8">
          <BackArrowIcon className="fill-stone-800" />
        </Link>
      </div>
      <div className="flex gap-2 ">
        <SharePurchaseIcon
          className="fill-emerald-300"
          height="40"
          width="40"
        />
        <h2 className="text-4xl font-bold text-emerald-300">Split Bill</h2>
      </div>
    </div>
  );
};

export default Header;
