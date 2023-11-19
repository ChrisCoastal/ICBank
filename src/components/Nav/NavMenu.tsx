import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/Dropdown';
import BaseIcon from '@/components/ui/icons/BaseIcon';
import SettingsIcon from '@/components/ui/icons/SettingsIcon';

const SettingsMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BaseIcon
          path="menu"
          fill="#fff"
          className="transition-all duration-200 hover:fill-emerald-300"
        />
        {/* <SettingsIcon
          height="24"
          width="24"
          className="fill-stone-100 transition-all duration-200 hover:fill-emerald-300"
        /> */}
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
