import { FC, memo } from 'react';

import type { Contact } from '@/@types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

type ContactAvatarProps = {
  // contact: Contact;
  name: string;
  avatarUrl: string;
};

// const ContactAvatar: FC<ContactAvatarProps> = ({ contact }) => {
//   return (
//     <div className="flex gap-4">
//       <div className="rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 p-0.5">
//         <Avatar>
//           <AvatarImage src={contact.avatar} />
//           <AvatarFallback>
//             {contact.name.slice(0, 2).toUpperCase()}
//           </AvatarFallback>
//         </Avatar>
//       </div>
//       <div className="my-auto text-base">{contact.name}</div>
//     </div>
//   );
// };

const ContactAvatar = memo(function ContactAvatar({
  name,
  avatarUrl,
}: ContactAvatarProps) {
  return (
    <div className="flex gap-4">
      <div className="rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 p-0.5">
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
      <div className="my-auto text-base">{name}</div>
    </div>
  );
});

export default ContactAvatar;
