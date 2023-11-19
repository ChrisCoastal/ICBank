import Image from 'next/image';
import Link from 'next/link';

import bearLogo from '/public/assets/bear-head-logo.png';

type Props = {};

const NavLogo = (props: Props) => {
  return (
    <Link href={'/'}>
      <div className="flex gap-1">
        <Image
          src={bearLogo}
          height={24}
          width={24}
          alt="IC Bank polar bear logo"
          className="self-center"
        />
        <h1 className="text-2xl font-black">
          <span className="mr-0.5 text-emerald-300">IC</span>Bank
        </h1>
      </div>
    </Link>
  );
};

export default NavLogo;
