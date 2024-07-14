import FollowButton from '@/src/app/social/_components/FollowButtons/FollowButton';
import UnFollowButton from '@/src/app/social/_components/FollowButtons/UnFollowButton';
import ProfileBlock from '@/src/app/social/_components/ProfileBlock';

interface UserListProps {
  users: {
    nickname: string;
    profileImageUrl: string | null;
    isFollowing: boolean;
    userId: number;
  }[];
}

const FollowList = ({ users }: UserListProps) => {
  return (
    <ul className='flex flex-col gap-4'>
      {users.map(
        ({ nickname, profileImageUrl, isFollowing, userId }, index) => (
          <div key={`${nickname}-${index}`} className='flex justify-between'>
            <ProfileBlock userName={nickname} profileImage={profileImageUrl} />
            {isFollowing ? (
              <UnFollowButton userId={userId} />
            ) : (
              <FollowButton userId={userId} />
            )}
          </div>
        ),
      )}
    </ul>
  );
};

export default FollowList;
