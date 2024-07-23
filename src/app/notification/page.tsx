'use client';

import { useGetNotificationsAPI } from '@/src/apis/notification';
import NotificationItem from '@/src/app/notification/_components/NotificationItem';
import EmptyPage from '@/src/components/EmptyPage';

const notificationMessageByType = {
  POST: ' 님이 게시글을 작성하였습니다.',
  FOLLOW: ' 님이 회원님을 팔로우하기 시작했습니다.',
};

const Notification = () => {
  const data = useGetNotificationsAPI();
  if (!data) return null;

  return (
    <div className='flex h-full grow flex-col overflow-y-auto'>
      {data.length === 0 && (
        <EmptyPage text='알림이 없습니다.' enableButton={false} />
      )}
      {data.map(
        (
          { writerId, writerName, followerId, followerName, timestamp, type },
          index,
        ) => (
          <li key={`${index}-${type}`} className='list-none'>
            {type === 'POST' && (
              <NotificationItem
                user={writerName!}
                userImage='/picky/user-square.svg'
                timestamp={timestamp}
                userId={writerId!}
                content={notificationMessageByType.POST}
              />
            )}
            {type === 'FOLLOW' && (
              <NotificationItem
                user={followerName!}
                userImage='/picky/user-square.svg'
                timestamp={timestamp}
                userId={followerId!}
                content={notificationMessageByType.FOLLOW}
              />
            )}
          </li>
        ),
      )}
    </div>
  );
};

export default Notification;
