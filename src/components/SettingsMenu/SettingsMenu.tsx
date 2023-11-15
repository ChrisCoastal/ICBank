import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/Dropdown';
import SettingsIcon from '@/components/ui/icons/SettingsIcon';

type Props = {};

const SettingsMenu = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SettingsIcon height="24" width="24" color="#4d4a4a" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Deposits</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsMenu;
