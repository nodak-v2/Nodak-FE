'use client';

import { useGetProfileAPI } from '@/src/apis/profile';

import ActiveGrass from './_components/ActiveGrass';
import MissionBadge from './_components/MissionBadge';
import UserInfo from './_components/UserInfo';
import UserPost from './_components/UserPost';

interface UserPageProps {
  params: { userId: string };
}

const UserPage = ({ params: { userId } }: UserPageProps) => {
  const profileData = useGetProfileAPI(userId);
  const {
    nickname,

    followerCount,
    followeeCount,
  } = profileData;

  return (
    <div className='flex grow flex-col'>
      <UserInfo
        nickname={nickname}
        followerCount={followerCount}
        followeeCount={followeeCount}
      />
      <MissionBadge />
      <UserPost postCount={5} />
      <ActiveGrass />
    </div>
  );
};

export default UserPage;
