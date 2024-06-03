import { getProfile } from '@/src/apis/profile';

import ActiveGrass from './_components/ActiveGrass';
import MissionBadge from './_components/MissionBadge';
import UserInfo from './_components/UserInfo';
import UserPost from './_components/UserPost';

interface UserPageProps {
  params: { userId: string };
}

const UserPage = async ({ params: { userId } }: UserPageProps) => {
  const profileData = await getProfile(userId);
  const {
    nickname,
    profileImageUrl,
    introduction,
    followerCount,
    followeeCount,
  } = profileData;

  return (
    <div className='flex grow flex-col'>
      <UserInfo
        nickname={nickname}
        profileImageUrl={profileImageUrl}
        introduction={introduction}
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
