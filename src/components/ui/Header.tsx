import Link from 'next/link';
import type { FC, ReactNode } from 'react';

import BackArrowIcon from '@/components/ui/icons/BackArrowIcon';
import BaseIcon from '@/components/ui/icons/BaseIcon';
import CheckIcon from '@/components/ui/icons/CheckIcon';
import type icons from '@/components/ui/icons/paths';
import SharePurchaseIcon from '@/components/ui/icons/SharePurchaseIcon';
import { cn } from '@/lib/utils';

type HeaderProps = {
  title: string;
  icon?: keyof typeof icons;
  back?: boolean;
  className?: string;
};

const Header: FC<HeaderProps> = ({ title, icon, back, className }) => {
  // <div className="mx-4 mb-4 flex max-w-5xl justify-end gap-2 lg:mx-auto lg:pr-4">
  //   <CheckIcon className="fill-emerald-300" height="40" width="40" />
  //   <h2 className="text-4xl font-bold text-emerald-300">Accounts</h2>
  // </div>;
  const headerStyles = cn(
    'mx-2 mb-4 flex max-w-5xl items-center justify-between gap-2 lg:mx-auto lg:pr-4',
    className
  );
  //mx-2 mb-4 flex max-w-5xl items-center justify-between lg:mx-auto lg:px-
  return (
    <header className={headerStyles}>
      {back ? (
        <div className="group my-auto rounded-full bg-emerald-300/95 p-2 transition-all duration-200 hover:bg-emerald-300">
          <Link href="/" className="w-8">
            <BaseIcon
              path="backArrow"
              fill="#292524"
              className="transition-all duration-200 hover:fill-stone-700"
            />
          </Link>
        </div>
      ) : (
        <div className="invisible" />
      )}
      <div className="flex gap-2">
        {icon ? (
          <BaseIcon
            path={icon}
            className="fill-emerald-300"
            height="40"
            width="40"
          />
        ) : null}
        <h2 className="text-4xl font-bold text-emerald-300">{title}</h2>
      </div>
    </header>
  );
};

export default Header;
