import GNB from '../../components/GNB';
import UserList from './_components/UserList';

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
  const onLineUsers = UserListPageDummyData.filter(user => user.isOnline);
  const offLineUsers = UserListPageDummyData.filter(user => !user.isOnline);

  return (
    <>
      <div className='h-[40px] border-b border-gray-accent2 text-white'>
        TobBar자리
      </div>
      <div className='flex grow flex-col gap-4 p-4'>
        <div className='flex flex-col gap-2 text-gray-accent1'>
          <span>{`온라인-${onLineUsers.length}`}</span>
          <UserList users={onLineUsers} />
        </div>
        <div className='flex flex-col gap-2 text-gray-accent2'>
          <span>{`오프라인-${offLineUsers.length}`}</span>
          <UserList users={offLineUsers} />
        </div>
      </div>
      <GNB />
    </>
  );
};

export default UserListPage;
