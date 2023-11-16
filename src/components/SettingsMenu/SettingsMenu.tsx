import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/Dropdown';
import SettingsIcon from '@/components/ui/icons/SettingsIcon';

const SettingsMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SettingsIcon
          height="24"
          width="24"
          className="fill-stone-100 hover:fill-emerald-300 transition-all duration-200"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Checking</DropdownMenuItem>
        <DropdownMenuItem>Savings</DropdownMenuItem>
        <DropdownMenuItem>Visa</DropdownMenuItem>
        <DropdownMenuItem>Deposits</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsMenu;
