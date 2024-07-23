'use client';

import { useGetNotificationsAPI } from '@/src/apis/notification';
import NotificationItem from '@/src/app/notification/_components/NotificationItem';

const notificationMessageByType = {
  POST: ' 님이 게시글을 작성하였습니다.',
  FOLLOW: ' 님이 회원님을 팔로우하기 시작했습니다.',
};

const mockData = [
  {
    writerId: '1',
    writerName: '김피키',
    followerId: null,
    followerName: null,
    timestamp: '2021-07-07T12:00:00',
    type: 'POST',
  },
  {
    writerId: null,
    writerName: null,
    followerId: '2',
    followerName: '김피키',
    timestamp: '2021-07-07T12:00:00',
    type: 'FOLLOW',
  },
  {
    writerId: '3',
    writerName: '김피키',
    followerId: null,
    followerName: null,
    timestamp: '2021-07-07T12:00:00',
    type: 'POST',
  },
  {
    writerId: null,
    writerName: null,
    followerId: '4',
    followerName: '김피키',
    timestamp: '2021-07-07T12:00:00',
    type: 'FOLLOW',
  },
  {
    writerId: '5',
    writerName: '김피키',
    followerId: null,
    followerName: null,
    timestamp: '2021-07-07T12:00:00',
    type: 'POST',
  },
  {
    writerId: null,
    writerName: null,
    followerId: '6',
    followerName: '김피키',
    timestamp: '2021-07-07T12:00:00',
    type: 'FOLLOW',
  },
];

const Notification = () => {
  const data = useGetNotificationsAPI();
  if (!data) return null;

  return (
    <div className='h-full'>
      {[...data, ...mockData].map(
        (
          { writerId, writerName, followerId, followerName, timestamp, type },
          index,
        ) => (
          <li key={`${index}-${type}`} className='list-none p-4 pt-3'>
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
