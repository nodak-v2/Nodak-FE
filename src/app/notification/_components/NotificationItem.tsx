import Image from 'next/image';
import Link from 'next/link';

import timeOffset from '@/src/utils/timeOffset';

type NotificationType = 'post' | 'comment' | 'follow';

interface Notification {
  userId: number;
  user: string;
  type: NotificationType;
  createdAt: string;
  userImage: string | null;
  isNew: boolean;
}

interface NotificationItemProps {
  notifications: Notification[];
}

const getNotificationMessage = (type: NotificationType) => {
  const notificationString = {
    post: ' 님이 새로운 투표를 게시했습니다.',
    comment: ' 님이 댓글을 남겼습니다.',
    follow: ' 님이 회원님을 팔로우하기 시작했습니다.',
  };

  return notificationString[type];
};

const NotificationItem = ({ notifications }: NotificationItemProps) => {
  return (
    <ul>
      {notifications.map(
        ({ user, userImage, createdAt, type, userId }, index) => {
          return (
            <li key={index} className='p-4 pt-3'>
              <section className='flex items-center gap-2'>
                <Link href={`/users/${userId}`}>
                  <Image
                    src={userImage ? userImage : '/picky/user-square.svg'}
                    alt='유저아바타'
                    width={36}
                    height={36}
                  />
                </Link>

                <div>
                  <Link href={`/users/${userId}`}>
                    <span>{user}</span>
                  </Link>
                  <span>{getNotificationMessage(type)}</span>
                  <p className='font-text-4-rg text-gray-accent4'>
                    {timeOffset(createdAt)}
                  </p>
                </div>
              </section>
            </li>
          );
        },
      )}
    </ul>
  );
};

export default NotificationItem;
