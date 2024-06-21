'use client';

import ProfileBlock from '../_components/ProfileBlock';
import Posting from './_components/PostingList';

const UserPage = () => {
  return (
    <div className='flex h-full flex-col gap-6 overflow-y-scroll'>
      <ProfileBlock />
      <Posting />
    </div>
  );
};

export default UserPage;
