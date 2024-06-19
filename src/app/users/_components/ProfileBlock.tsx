'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import { useGetProfileAPI } from '@/src/apis/profile';

const MyPageButton = () => {
  return (
    <button className='font-title-1-md rounded-[8px] border border-primary py-2 text-primary'>
      프로필 수정
    </button>
  );
};

const UserPageButton = () => (
  <div className='flex items-center gap-4'>
    <button className='font-title-1-md w-full rounded-[8px] border border-primary py-2 text-primary'>
      팔로우
    </button>
    <button className='font-title-1-md w-full rounded-[8px] border border-primary py-2 text-primary'>
      메시지
    </button>
  </div>
);

const ProfileBlock = () => {
  const { userId } = useParams() as { userId: string };
  const { userId: myId } = useGetUserStatusAPI();
  const { followeeCount, followerCount } = useGetProfileAPI(
    !userId ? String(myId) : userId,
  );

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
              <span className='font-text-3-rg text-gray-accent4'>작성글</span>
              <span className='font-title-2-sm'>3</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='font-text-3-rg text-gray-accent4'>팔로워</span>
              <span className='font-title-2-sm'>{followerCount}</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='font-text-3-rg text-gray-accent4'>팔로잉</span>
              <span className='font-title-2-sm'>{followeeCount}</span>
            </div>
          </div>
        </div>
      </div>
      {!userId ? <MyPageButton /> : <UserPageButton />}
    </div>
  );
};

export default ProfileBlock;
