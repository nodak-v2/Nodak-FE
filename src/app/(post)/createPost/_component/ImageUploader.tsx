'use client';

import { useState } from 'react';

import Image from 'next/image';

import Icon from '@/src/components/Icon';
import ImageUploadButton from '@/src/components/ImageUploadButton';

interface ImageUploaderProps {
  imageSrcUrl?: string;
  onChange: (file?: File | null) => void;
}

const ImageUploader = ({ imageSrcUrl, onChange }: ImageUploaderProps) => {
  const [previewImageUrl, setPreviewImageUrl] = useState(imageSrcUrl || null);

  const handleDeleteImage = () => {
    setPreviewImageUrl(null);
    onChange(null);
  };

  return (
    <div className='bg-gray-accent7 flex w-full justify-center p-10'>
      <div className='relative '>
        {previewImageUrl ? (
          <>
            <Image
              src={previewImageUrl}
              alt='profile'
              className='z-10 h-40 w-40 rounded-lg bg-white object-cover'
              width={500}
              height={500}
            />
            <button
              onClick={handleDeleteImage}
              className='absolute right-1 top-2 flex cursor-pointer items-center justify-center rounded-full border bg-white text-black'
            >
              <Icon
                id='dash-circle-fill'
                aria-label='업로드한 이미지 삭제하기'
                size={16}
                style={{ opacity: 0.5 }}
              />
            </button>
          </>
        ) : (
          <div className='h-40 w-40 rounded-lg bg-gray-200' />
        )}
        <div className='absolute -bottom-3 -right-3 z-10'>
          <ImageUploadButton
            setImageUrl={setPreviewImageUrl}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
export default ImageUploader;
