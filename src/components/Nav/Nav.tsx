import Link from 'next/link';
import React from 'react'

import SettingsMenu from '@/components/SettingsMenu/SettingsMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className="mx-4 mb-4 flex h-16 items-center justify-between border-b border-b-white/20">
    <Link href={'/'}>
      <div className="">
        <h1 className="text-2xl font-black">
          <span className="mr-0.5 text-emerald-300">IC</span>Bank
        </h1>
      </div>
    </Link>
    <div className="flex gap-4">
      <div className="rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 p-0.5">
        <Avatar>
          <AvatarImage src={'/assets/bear-avatar.png'} />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>
      </div>
      <SettingsMenu />
    </div>
  </nav>
  )
}

export default Nav