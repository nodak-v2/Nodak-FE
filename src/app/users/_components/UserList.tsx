import Image from 'next/image';

import { Drawer, DrawerTrigger } from '@/src/components/Drawer';

import DrawerContent from './DrawerContent';

interface User {
  id: number;
  name: string;
  userImage: string;
  isOnline: boolean;
}

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const { name, userImage } = user;

  return (
    <Drawer>
      <DrawerTrigger className='flex w-full items-center gap-4 border-b border-gray-accent2 p-3'>
        <Image
          src={userImage}
          alt='유저아바타'
          width={40}
          height={40}
          className='rounded-full'
        />
        <span>{name}</span>
      </DrawerTrigger>
      <DrawerContent image={userImage} name={name} />
    </Drawer>
  );
};

const UserList = ({ users }: { users: User[] }) => (
  <ul className='rounded-md bg-dark-accent1'>
    {users.map(user => (
      <UserItem key={`${user.id}-${user.name}`} user={user} />
    ))}
  </ul>
);

export default UserList;
