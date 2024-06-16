import GNB from '@/src/components/GNB';

import MyVote from './_components/MyVote';
import ProfileBlock from './_components/ProfileBlock';
import Setting from './_components/Setting';

const ProfilePage = () => {
  return (
    <>
      <div className='flex grow flex-col gap-8'>
        <ProfileBlock />
        <MyVote />
        <Setting />
      </div>
      <GNB />
    </>
  );
};

export default ProfilePage;
