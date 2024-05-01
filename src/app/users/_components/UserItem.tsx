import Image from 'next/image';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/src/components/ui/Drawer';

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
        <span className='text-gray-accent1'>{`${name}`}</span>
      </DrawerTrigger>
      <DrawerContent className='absolute'>
        <div className='p-4'>
          <span className='text-lg font-bold text-white'>{name}</span>
        </div>
        <DrawerClose className='text-gray-accent1'>닫기</DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

const UserList = ({ users }: { users: User[] }) => {
  return (
    <ul className='rounded-md bg-dark-accent1'>
      {users.map(user => (
        <UserItem key={`${user.id}-${user.name}`} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
