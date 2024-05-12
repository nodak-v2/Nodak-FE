'use client';

import { useState } from 'react';

import Image from 'next/image';

import ImageUploadButton from '@/src/app/_components/ImageUploadButton';
import Icon from '@/src/components/Icon';

interface ImageUploaderProps {
  imageSrcUrl?: string;
  onChange: (file?: File) => void;
}

const ImageUploader = ({ imageSrcUrl, onChange }: ImageUploaderProps) => {
  const [previewImageUrl, setPreviewImageUrl] = useState(imageSrcUrl || null);

  const handleDeleteImage = () => setPreviewImageUrl(null);

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
              className='absolute right-1 top-2 cursor-pointer items-center'
            >
              <Icon
                id='dash-circle-fill'
                aria-label='업로드한 이미지 삭제하기'
                style={{ opacity: 0.4 }}
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
