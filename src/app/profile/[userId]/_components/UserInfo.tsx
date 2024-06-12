'use client';

import Image from 'next/image';

interface UserInfoProps {
  nickname: string;
  profileImageUrl?: string;
  introduction?: string;
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
    <div className='flex  w-full flex-col border-b pt-5'>
      <div className='flex items-center gap-4 px-4'>
        <div className='relative'>
          <Image
            src={profileImageUrl || '/icon-128x128.png'}
            alt='사용자 이미지'
            width={150}
            height={150}
            className='rounded-xl object-cover'
          />
        </div>
        <div className='flex grow flex-col items-start gap-2'>
          <span className='text-xl font-bold'>{nickname}</span>
          {/* 소개글이 없을 때 어떻게 렌더링 할 것 인지에 대한 디자인 필요 */}
          <span className='text-sm'>
            {introduction || '사용자는 아직 소개글을 작성하지 않았습니다.'}
          </span>
        </div>
      </div>
      <div className='p-4'>
        {/* Todo : 해당 버튼에 동작 추가 */}
        <button
          className='w-full rounded-md bg-[#C7B299] py-2 text-dark-accent2'
          onClick={() => {
            console.log('프로필 수정');
          }}
        >
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
