'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';

import Icon from '@/src/components/Icon';
import { useImageUpload } from '@/src/hooks/useImageUpload';

interface ImageUploaderProps {
  imageUrl: string | null;
  onChange: (imageUrl: string | null) => void;
}

const DEFAULT_IMAGE_URL = '/picky/user-square.svg';

const ImageUploader = ({ imageUrl, onChange }: ImageUploaderProps) => {
  const [imageSrcUrl, setImageSrcUrl] = useState<string | null>(imageUrl);
  const inputElement = useRef<HTMLInputElement>(null);
  const imageUpload = useImageUpload();

  const handleDeleteImageUrl = () => {
    setImageSrcUrl(null);
    onChange(null);
  };

  const handleImageSelect = async () => {
    const file = inputElement.current?.files?.[0];
    if (!file) return;

    const imageUrl = await imageUpload(file);
    setImageSrcUrl(imageUrl);
    onChange(imageUrl);
  };

  return (
    <>
      <div className='bg-gray-accent7 flex w-full flex-col items-center justify-center gap-5 p-8'>
        <div className='relative'>
          <Image
            src={imageSrcUrl || DEFAULT_IMAGE_URL}
            alt='profile'
            className='h-[83.33px] w-[83.33px] rounded-lg object-cover'
            width={83}
            height={83}
          />
          <label
            htmlFor='imageUploadButton'
            className='absolute -bottom-3 -right-3'
          >
            <Icon
              id='camera'
              aria-label='이미지 업로드하기'
              size={32}
              className='cursor-pointer'
            />
          </label>
          <input
            id='imageUploadButton'
            className='hidden'
            type='file'
            accept='image/*'
            onChange={handleImageSelect}
            ref={inputElement}
          />
        </div>
        {imageSrcUrl ? (
          <span
            className='cursor-pointer text-[14px] text-gray-accent3 underline'
            onClick={handleDeleteImageUrl}
          >
            프로필 사진 삭제
          </span>
        ) : (
          <span></span>
        )}
      </div>
    </>
  );
};

export default ImageUploader;
