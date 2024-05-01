import GNB from '../_components/GNB';
import UserList from './_components/UserItem';

const UserListPageDummyData = [
  {
    id: 1,
    name: 'Alice',
    isOnline: true,
    userImage: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Bob',
    isOnline: false,
    userImage: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Charlie',
    isOnline: true,
    userImage: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'David',
    isOnline: false,
    userImage: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Eve',
    isOnline: true,
    userImage: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Frank',
    isOnline: false,
    userImage: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Grace',
    isOnline: true,
    userImage: 'https://via.placeholder.com/150',
  },
];

const UserListPage = () => {
  const isOnlineUser = UserListPageDummyData.filter(user => user.isOnline);
  const isOfflineUser = UserListPageDummyData.filter(user => !user.isOnline);

  return (
    <>
      <div className='h-[40px] border-b border-gray-accent2 text-white'>
        TobBar자리
      </div>
      <div className='flex grow flex-col gap-4 p-4'>
        <div className='flex flex-col gap-2'>
          <span className='text-gray-accent1'>{`온라인-${isOnlineUser.length}`}</span>
          <UserList users={isOnlineUser} />
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-gray-accent2'>{`오프라인-${isOfflineUser.length}`}</span>
          <UserList users={isOfflineUser} />
        </div>
      </div>
      <GNB />
    </>
  );
};

export default UserListPage;
