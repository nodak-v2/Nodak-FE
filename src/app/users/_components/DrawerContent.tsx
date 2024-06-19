import Image from 'next/image';

import { DrawerClose, DrawerContent } from '@/src/components/Drawer';

import { FollowButton, LinkDMButton, LinkProfileButton } from './DrawerButton';

interface DrawerContentBoxProps {
  image?: string;
  name: string;
  isMe?: boolean;
}

const DrawerContentBox = ({
  image = 'https://via.placeholder.com/150',
  name,
  isMe = false,
}: DrawerContentBoxProps) => (
  <DrawerContent
    id='drawer-content'
    className='absolute bottom-0 border-none text-gray-accent1'
  >
    <li className='flex flex-col gap-4 p-4'>
      <Image
        src={image}
        alt='유저 아바타'
        width={80}
        height={80}
        className='rounded-full object-contain'
      />
      <div className='flex flex-col gap-4 rounded-md p-4'>
        <div className='text-lg font-bold'>{name}</div>
        <div className='flex items-center gap-3'>
          {isMe ? (
            <LinkProfileButton />
          ) : (
            <>
              <LinkProfileButton />
              <LinkDMButton />
              <FollowButton />
            </>
          )}
        </div>
      </div>
    </li>
    <DrawerClose className='rounded-b-md py-2 text-gray-accent1'>
      닫기
    </DrawerClose>
  </DrawerContent>
);

export default DrawerContentBox;
