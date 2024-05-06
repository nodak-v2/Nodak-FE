'use client';

import { useState } from 'react';

import Image from 'next/image';

interface ProfileBlockProps {
  name: string;
  imageUrl: string;
}

const ProfileBlock = ({ name, imageUrl }: ProfileBlockProps) => {
  const [src, setSrc] = useState(imageUrl);

  return (
    <div className='flex w-full items-center gap-4 pb-4'>
      <Image
        src={src}
        alt={`${name}님의 프로필 이미지`}
        width={40}
        height={40}
        className='rounded-full object-cover'
        onError={() => setSrc('https://via.placeholder.com/40')}
      />
      <span className='text-sm font-bold text-gray-accent1'>{name}</span>
    </div>
  );
};

export default ProfileBlock;
