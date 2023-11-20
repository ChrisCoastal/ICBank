import NavLogo from '@/components/Nav/NavLogo';
import NavMenu from '@/components/Nav/NavMenu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

const Nav = () => {
  return (
    <nav className="mx-4 mb-4 flex h-16 items-center justify-between border-b border-b-white/20">
      <NavLogo />
      <div className="flex gap-4">
        <div className="rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 p-0.5">
          <Avatar>
            <AvatarImage src={'/assets/bear-avatar.png'} />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
        </div>
        <NavMenu />
      </div>
    </nav>
  );
};

export default Nav;
