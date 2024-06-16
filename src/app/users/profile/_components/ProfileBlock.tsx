'use client';

import Image from 'next/image';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import { useGetProfileAPI } from '@/src/apis/profile';

const ProfileBlock = () => {
  const { userId } = useGetUserStatusAPI();
  const { followeeCount, followerCount } = useGetProfileAPI(String(userId));

  return (
    <div className='flex w-full flex-col gap-6 px-4 pt-4'>
      <div className='flex items-center gap-2'>
        <Image
          src='/placeHolder_130.png'
          alt='유저이미지'
          width={52}
          height={52}
        />
        <div className='flex flex-col gap-1'>
          <span className='font-h3-sm'>유저 닉네임</span>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <span className='text-gray-accent4 font-text-3-rg'>작성글</span>
              <span className='font-title-2-sm'>3</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-gray-accent4 font-text-3-rg'>팔로워</span>
              <span className='font-title-2-sm'>{followerCount}</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-gray-accent4 font-text-3-rg'>팔로잉</span>
              <span className='font-title-2-sm'>{followeeCount}</span>
            </div>
          </div>
        </div>
      </div>
      <button className='font-title-1-md rounded-[8px] border border-primary py-2 text-primary'>
        프로필 수정
      </button>
    </div>
  );
};

export default ProfileBlock;
