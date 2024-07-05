import ProfileBlock from '@/src/app/social/_components/ProfileBlock';
import Button from '@/src/components/Button/Button';

interface UserListProps {
  users: {
    nickname: string;
    profileImageUrl: string | null;
    isFollowing: boolean;
  }[];
}

const FollowList = ({ users }: UserListProps) => {
  return (
    <ul className='flex flex-col gap-4'>
      {users.map(({ nickname, profileImageUrl, isFollowing }, index) => (
        <div key={`${nickname}-${index}`} className='flex justify-between'>
          <ProfileBlock userName={nickname} profileImage={profileImageUrl} />
          {isFollowing ? (
            <Button
              className='font-title-1-md w-[90px]  py-2'
              baseColor='primaryInverted'
            >
              팔로잉
            </Button>
          ) : (
            <Button
              className='font-title-1-md w-[90px] py-2'
              baseColor='primary'
            >
              팔로우
            </Button>
          )}
        </div>
      ))}
    </ul>
  );
};

export default FollowList;
