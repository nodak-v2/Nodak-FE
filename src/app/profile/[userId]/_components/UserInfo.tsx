'use client';

import Image from 'next/image';

interface UserInfoProps {
  nickname: string;
  profileImageUrl: string;
  introduction: string;
  followeeCount: number;
  followerCount: number;
}
const UserInfo = ({
  nickname,
  profileImageUrl,
  introduction,
  followeeCount,
  followerCount,
}: UserInfoProps) => {
  return (
    <div className='flex flex-col border-b pt-5'>
      <div className='flex items-center gap-4 px-4'>
        <Image
          src={profileImageUrl}
          alt='사용자 이미지'
          width={150}
          height={150}
          className='rounded-full object-cover'
        />
        <div className='flex grow flex-col items-center gap-2'>
          <span className='font-bold'>{nickname}</span>
          <span className='text-sm'>{introduction}</span>
        </div>
      </div>
      <div className='p-4'>
        <button className='w-full rounded-md bg-[#C7B299] py-2'>
          프로필 수정
        </button>
      </div>
      <div className='flex items-center gap-4 p-4 text-xs text-[#F0F0F0]'>
        <span>{`${followerCount} 팔로워`}</span>
        <span>{`${followeeCount} 팔로잉`}</span>
      </div>
    </div>
  );
};

export default UserInfo;
