import GNB from '@/src/components/GNB';
import Icon from '@/src/components/Icon';
import TopBar from '@/src/components/Topbar';

import NotificationItem from './_components/NotificationItem';

const ALARM_DUMMY = [
  // {
  //   user: '유저 1',
  //   type: 'post',
  //   createdAt: '2024-06-19 14:26:00',
  //   userImage: 'https://via.placeholder.com/150',
  //   isNew: true,
  // },
  // {
  //   user: '유저 1',
  //   type: 'comment',
  //   createdAt: '2024-06-19 13:20:00',
  //   userImage: 'https://via.placeholder.com/150',
  //   isNew: false,
  // },
  // {
  //   user: '유저 5',
  //   type: 'follow',
  //   createdAt: '2024-06-18 13:26:00',
  //   userImage: 'https://via.placeholder.com/150',
  //   isNew: false,
  // },
];

const Notification = () => {
  return (
    <div className='flex h-full flex-col'>
      <TopBar.Container>
        <TopBar.Left>
          <TopBar.Title>
            <p className='text-2xl text-white'>알림</p>
          </TopBar.Title>
        </TopBar.Left>
      </TopBar.Container>
      <main className='grow'>
        {ALARM_DUMMY.length === 0 ? (
          <div className='flex h-full flex-col items-center justify-center gap-2 text-white'>
            <Icon id='warning' aria-label='알림이 없습니다.' size={64} />
            <span className='font-semibold text-white'>알림이 없습니다.</span>
          </div>
        ) : (
          <NotificationItem notifications={ALARM_DUMMY} />
        )}
      </main>
      <GNB />
    </div>
  );
};

export default Notification;
