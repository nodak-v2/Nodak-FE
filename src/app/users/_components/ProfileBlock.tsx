'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import { useGetProfileAPI } from '@/src/apis/profile';

import { useFollow } from '../[userId]/hooks/useFollow';

const MyPageButton = () => {
  return (
    <button className='font-title-1-md rounded-[8px] border border-primary py-2 text-primary'>
      프로필 수정
    </button>
  );
};

const UserPageButton = () => {
  const { userId } = useParams() as { userId: string };
  const { postFollow, deleteFollow } = useFollow(userId);
  const { isFollowing } = useGetProfileAPI(userId);

  const handleFollow = () => {
    if (isFollowing) {
      deleteFollow();
    } else {
      postFollow();
    }
  };

  return (
    <div className='flex items-center gap-4'>
      {isFollowing ? (
        <button
          className='font-title-1-md w-full rounded-[8px] border border-primary py-2 text-primary'
          onClick={handleFollow}
        >
          팔로잉
        </button>
      ) : (
        <button
          className='font-title-1-md w-full rounded-[8px] border border-sub bg-sub py-2 text-primary'
          onClick={handleFollow}
        >
          팔로우
        </button>
      )}
      <Link
        className='font-title-1-md flex w-full items-center justify-center rounded-[8px] border border-primary py-2 text-primary'
        href={`/users/${userId}/message`}
      >
        메시지
      </Link>
    </div>
  );
};

const ProfileBlock = () => {
  const { userId } = useParams() as { userId: string };
  const { userId: myId } = useGetUserStatusAPI();
  const { followeeCount, followerCount, postCount, nickname } =
    useGetProfileAPI(!userId ? String(myId) : userId);

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
          <span className='font-h3-sm'>{nickname}</span>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <span className='font-text-3-rg text-gray-accent4'>작성글</span>
              <span className='font-title-2-sm'>{postCount}</span>
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
