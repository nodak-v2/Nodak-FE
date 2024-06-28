'use client';

import { useState } from 'react';

import Image from 'next/image';

import Icon from '@/src/components/Icon';
import ImageUploadButton from '@/src/components/ImageUploadButton';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';

interface ImageUploaderProps {
  imageSrcUrl?: string;
  defaultSrcUrl?: string;
  onChange: (imageUrl: string | null) => void;
}

const ImageUploader = ({
  imageSrcUrl,
  onChange,
  defaultSrcUrl = '/default-image.png',
}: ImageUploaderProps) => {
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
        <div className='relative'>
          <Image
            src={previewImageUrl ? previewImageUrl : defaultSrcUrl}
            alt='profile'
            className='z-10 h-[83.33px] w-[83.33px] rounded-lg object-cover'
            width={83}
            height={83}
          />
          {previewImageUrl && (
            <button
              onClick={handleDeleteImage}
              className='absolute right-0 top-0 flex cursor-pointer items-center justify-center rounded-full border bg-white text-black'
              type='button'
            >
              <Icon
                id='dash-circle-fill'
                aria-label='업로드한 이미지 삭제하기'
                size={16}
                style={{ opacity: 0.5 }}
              />
            </button>
          )}
          <div className='absolute -bottom-2 -right-2'>
            <ImageUploadButton
              onChange={onChange}
              setImageUrl={setPreviewImageUrl}
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
