import Image from 'next/image';

import timeOffset from '@/src/utils/timeOffset';

interface Notification {
  user: string;
  type: 'post' | 'comment' | 'follow';
  createdAt: string;
  userImage: string;
  isNew: boolean;
}

interface NotificationItemProps {
  notifications: Notification[];
}

const getNotificationMessage = (notification: Notification) => {
  const { type } = notification;

  switch (type) {
    case 'post':
      return ` 님이 새로운 투표를 게시했습니다.`;
    case 'comment':
      return ` 님이 댓글을 남겼습니다.`;
    case 'follow':
      return ` 님이 회원님을 팔로우하기 시작했습니다.`;
    default:
      return '';
  }
};

const NotificationItem = ({ notifications }: NotificationItemProps) => {
  return (
    <ul>
      {notifications.map((notification, index) => {
        const { user, userImage, createdAt, isNew } = notification;

        return (
          <li key={index} className={`p-4 ${isNew ? 'bg-[#2D3033]' : ''}`}>
            <section className='flex gap-4'>
              <div>
                <Image
                  src={userImage}
                  alt='유저아바타'
                  width={36}
                  height={36}
                  className='rounded-lg'
                />
              </div>
              <div className='text-white'>
                <span className='font-bold'>{user}</span>
                <span>{getNotificationMessage(notification)}</span>
                <p className='text-xs font-light'>{timeOffset(createdAt)}</p>
              </div>
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default NotificationItem;
