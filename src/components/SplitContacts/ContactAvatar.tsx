import { memo } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

type ContactAvatarProps = {
  name: string;
  avatarUrl: string;
};

const ContactAvatar = memo(function ContactAvatar({
  name,
  avatarUrl,
}: ContactAvatarProps) {
  return (
    <div className="flex gap-4">
      <div className="rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 p-0.5">
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback className="bg-transparent">
            {name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="my-auto text-base">{name}</div>
    </div>
  );
});

export default ContactAvatar;
