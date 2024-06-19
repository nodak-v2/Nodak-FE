'use client';

import { useState } from 'react';

import Image from 'next/image';

import Icon from '@/src/components/Icon';
import TextInput from '@/src/components/TextInput';

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
  const [isEditing, setIsEditing] = useState(false);
  const [editNickname, setEditNickname] = useState(nickname);
  const [editIntroduction, setEditIntroduction] = useState(introduction);

  const handleProfileEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className='flex  w-full flex-col border-b pt-5'>
      <div className='flex items-center gap-4 px-4'>
        <div className='relative'>
          {isEditing && <Icon id='close' className='absolute right-0 top-0' />}
          <Image
            src={profileImageUrl}
            alt='사용자 이미지'
            width={150}
            height={150}
            className='rounded-xl object-cover'
          />
          {isEditing && (
            <Icon id='camera' size={24} className='absolute bottom-0 right-0' />
          )}
        </div>
        <div className='flex grow flex-col items-start gap-2'>
          {isEditing ? (
            <TextInput
              className='rounded-sm p-0'
              value={editNickname}
              onChange={e => setEditNickname(e.target.value)}
            />
          ) : (
            <span className='text-xl font-bold'>{nickname}</span>
          )}
          {isEditing ? (
            <TextInput
              className='rounded-sm p-0'
              value={editIntroduction}
              onChange={e => setEditIntroduction(e.target.value)}
            />
          ) : (
            <span className='text-sm'>{introduction}</span>
          )}
        </div>
      </div>
      <div className='p-4'>
        <button
          className='w-full rounded-md bg-[#C7B299] py-2'
          onClick={handleProfileEdit}
        >
          {isEditing ? '프로필 저장' : '프로필 수정'}
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
