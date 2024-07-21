'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import { useGetProfileAPI } from '@/src/apis/profile';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import useModal from '@/src/hooks/useModal';

import { useFollow } from '../[userId]/hooks/useFollow';

const MyPageButton = () => {
  return (
    <Link
      href='/users/profile/edit'
      className='font-title-1-md rounded-[8px] border border-primary py-2 text-center text-primary'
    >
      프로필 수정
    </Link>
  );
};

const UserPageButton = () => {
  const { userId } = useParams() as { userId: string };
  const { postFollow, deleteFollow } = useFollow(userId);
  const { isFollowing } = useGetProfileAPI(userId);

  const handleFollow = () => postFollow();

  const handleUnFollow = () => {
    deleteFollow();
    closeUnfollowModal();
  };

  const {
    isOpen: isOpenUnfollowModal,
    open: openUnfollowModal,
    close: closeUnfollowModal,
  } = useModal();

  return (
    <div className='flex items-center gap-4'>
      {isFollowing ? (
        <button
          className='font-title-1-md w-full rounded-[8px] border border-primary py-2 text-primary'
          onClick={openUnfollowModal}
        >
          팔로잉
        </button>
      ) : (
        <button
          className='font-title-1-md w-full rounded-[8px] border border-sub bg-primary py-2'
          onClick={handleFollow}
        >
          팔로우
        </button>
      )}
      <ConfirmationModal
        description='팔로우를 취소하시겠습니까?'
        isShow={isOpenUnfollowModal}
        onConfirm={handleUnFollow}
        onClose={closeUnfollowModal}
      />
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
  const {
    userId: myId,
    profileImage,
    nickname: myName,
  } = useGetUserStatusAPI();
  const {
    followeeCount,
    followerCount,
    postCount,
    nickname,
    profileImageUrl: userProfileImage,
  } = useGetProfileAPI(!userId ? String(myId) : userId);

  const followersPath = userId
    ? `/social/${userId}/followers`
    : '/social/followers';
  const followeesPath = userId
    ? `/social/${userId}/followees`
    : '/social/followees';

  return (
    <div className='flex w-full flex-col gap-6 px-4 pt-4'>
      <div className='flex items-center gap-2'>
        <Image
          src={
            (userId ? userProfileImage : profileImage) ||
            '/picky/user-square.svg'
          }
          alt='유저이미지'
          width={52}
          height={52}
          className='min-h-[52px] min-w-[52px] rounded-[8px]'
        />
        <div className='flex flex-col gap-1'>
          <span className='font-h3-sm'>{userId ? nickname : myName}</span>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <span className='font-text-3-rg text-gray-accent4'>작성글</span>
              <span className='font-title-2-sm'>{postCount}</span>
            </div>
            <Link className='flex items-center gap-1' href={followersPath}>
              <span className='font-text-3-rg text-gray-accent4'>팔로워</span>
              <span className='font-title-2-sm'>{followerCount}</span>
            </Link>
            <Link className='flex items-center gap-1' href={followeesPath}>
              <span className='font-text-3-rg text-gray-accent4'>팔로잉</span>
              <span className='font-title-2-sm'>{followeeCount}</span>
            </Link>
          </div>
        </div>
      </div>
      {!userId ? <MyPageButton /> : <UserPageButton />}
    </div>
  );
};

export default ProfileBlock;
