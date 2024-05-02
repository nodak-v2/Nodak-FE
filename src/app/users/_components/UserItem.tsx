import Image from 'next/image';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/src/components/ui/Drawer';

import DrawerButton from './DrawerButton';

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
      <DrawerContent
        id='drawer-content'
        className='absolute bottom-0 border-none bg-dark-accent1 text-gray-accent1'
      >
        <div className='flex flex-col gap-8 p-4'>
          <Image
            src={userImage}
            alt='유저 아바타'
            width={80}
            height={80}
            className='object-fit rounded-full'
          />
          <div className='flex flex-col gap-4 rounded-md bg-dark-accent2 p-4 pt-2'>
            <div className='text-lg font-bold text-gray-accent1'>{name}</div>
            <DrawerButton isMe={true} />
          </div>
        </div>
        <DrawerClose className='rounded-b-md bg-dark-accent2 py-2 text-gray-accent1'>
          닫기
        </DrawerClose>
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
