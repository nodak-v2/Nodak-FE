'use client';

import { useState } from 'react';

import Image from 'next/image';

import Icon from '@/src/components/Icon';
import ImageUploadButton from '@/src/components/ImageUploadButton';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';

interface ImageUploaderProps {
  imageSrcUrl?: string;
  onChange: (imageUrl: string | null) => void;
}

const ImageUploader = ({ imageSrcUrl, onChange }: ImageUploaderProps) => {
  const [previewImageUrl, setPreviewImageUrl] = useState(imageSrcUrl || null);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleDeleteImage = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const handleConfirmDeleteImage = () => {
    setPreviewImageUrl(null);
    onChange(null);

    setIsShowModal(false);
  };

  return (
    <>
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
          <div className='absolute -bottom-3 -right-3'>
            <ImageUploadButton
              setImageUrl={setPreviewImageUrl}
              onChange={onChange}
            />
          </div>
        </div>
      </div>

      <ConfirmationModal
        description='이미지를 삭제하시겠습니까?'
        isShow={isShowModal}
        onConfirm={handleConfirmDeleteImage}
        onClose={handleCloseModal}
      />
    </>
  );
};
export default ImageUploader;
