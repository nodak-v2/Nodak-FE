import Image from 'next/image';
import Link from 'next/link';

import timeOffset from '@/src/utils/timeOffset';

interface NotificationItemProps {
  user: string;
  userImage: string;
  timestamp: number;
  userId: number;
  content: string;
}

const NotificationItem = ({
  user,
  userImage,
  timestamp,
  userId,
  content,
}: NotificationItemProps) => {
  return (
    <Link
      href={`/users/${userId}`}
      className='flex items-center gap-2 p-4 pt-3 hover:bg-gray-accent1'
    >
      <Image
        src={userImage ? userImage : '/picky/user-square.svg'}
        alt='유저아바타'
        width={36}
        height={36}
      />

      <div>
        <span className='font-title-1-md'>{user}</span>
        <span className='font-title-1-md'>{content}</span>
        <p className='font-text-4-rg text-gray-accent4'>
          {timeOffset(new Date(timestamp - 1000))}
        </p>
      </div>
    </Link>
  );
};

export default NotificationItem;
