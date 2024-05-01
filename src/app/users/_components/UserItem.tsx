import Image from 'next/image';

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
  const { id, name, userImage } = user;

  return (
    <li
      key={`${id}-${name}`}
      className='flex items-center gap-4 border-b border-gray-accent2 p-3'
    >
      <Image
        src={userImage}
        alt='유저아바타'
        width={40}
        height={40}
        className='rounded-full'
      />
      <span className='text-gray-accent1'>{id}</span>
    </li>
  );
};

const UserList = ({ users }: { users: User[] }) => {
  return (
    <>
      <ul className='rounded-md bg-dark-accent1'>
        {users.map(user => (
          <UserItem key={`${user.id}-${user.name}`} user={user} />
        ))}
      </ul>
    </>
  );
};

export default UserList;
