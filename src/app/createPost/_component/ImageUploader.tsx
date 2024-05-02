'use client';

import { useState } from 'react';

import Image from 'next/image';

import ImageUploadButton from '@/src/app/_components/ImageUploadButton';
import Icon from '@/src/components/Icon';

interface ImageUploadProps {
  imageSrcUrl?: string;
  onChange?: (file?: File) => void;
}

const ImageUploader = ({ imageSrcUrl, onChange }: ImageUploadProps) => {
  const [previewImageUrl, setPreviewImageUrl] = useState(imageSrcUrl || null);

  const handleDeleteImage = () => {
    setPreviewImageUrl(null);
  };

  return (
    <div className='bg-gray-accent7 mb-3 flex w-full justify-center p-10'>
      <div className='relative'>
        {previewImageUrl ? (
          <Image
            src={previewImageUrl}
            alt='profile'
            className='z-10 h-40 w-40 rounded-lg bg-white object-cover'
            width={500}
            height={500}
          />
        ) : (
          <div className='h-40 w-40 rounded-lg bg-gray-200' />
        )}
        <div className='absolute -bottom-3 -right-3 z-10'>
          {previewImageUrl ? (
            <button
              onClick={handleDeleteImage}
              className='border-gray-accent5 flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full border bg-white text-gray-accent2'
            >
              <Icon id='x' aria-label='업로드한 이미지 삭제하기' />
            </button>
          ) : (
            <ImageUploadButton
              setImageUrl={setPreviewImageUrl}
              onChange={onChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ImageUploader;
