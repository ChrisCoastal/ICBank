import Link from 'next/link';
import type { FC } from 'react';

import BaseIcon from '@/components/ui/icons/BaseIcon';
import type icons from '@/components/ui/icons/paths';
import { cn } from '@/lib/utils';

type HeaderProps = {
  title: string;
  icon?: keyof typeof icons;
  back?: boolean;
  className?: string;
};

const Header: FC<HeaderProps> = ({ title, icon, back, className }) => {
  const headerStyles = cn(
    'mx-2 mb-4 flex max-w-5xl items-center justify-between gap-2 lg:mx-auto lg:pr-4',
    className
  );
  return (
    <header className={headerStyles}>
      {back ? (
        <div className="group my-auto rounded-full bg-emerald-300 p-2 transition-all duration-300 active:scale-90">
          <Link href="/" className="w-8">
            <BaseIcon
              path="backArrow"
              fill="#292524"
              className="transition-all duration-200"
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
