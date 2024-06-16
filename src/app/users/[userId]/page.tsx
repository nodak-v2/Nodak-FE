'use client';

import ProfileBlock from '../_components/ProfileBlock';
import Posting from './_components/Posting';

const UserPage = () => {
  return (
    <div className='flex grow flex-col gap-6'>
      <ProfileBlock />
      <Posting />
    </div>
  );
};

export default UserPage;
