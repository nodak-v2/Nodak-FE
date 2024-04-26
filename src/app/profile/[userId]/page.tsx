'use client';

import ActiveGrass from './_components/ActiveGrass';
import MissionBadge from './_components/MissionBadge';
import UserInfo from './_components/UserInfo';
import UserPost from './_components/UserPost';

const userDummyData = {
  nickname: 'John Doe',
  profileImageUrl: 'https://via.placeholder.com/150',
  introduction: 'Hello, I am John Doe',
  createdAt: '2021-01-01',
  updatedAt: '2021-01-01',
  followerCount: 10,
  followeeCount: 5,
};
const UserPage = () => {
  const {
    nickname,
    profileImageUrl,
    introduction,
    followerCount,
    followeeCount,
  } = userDummyData;

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
