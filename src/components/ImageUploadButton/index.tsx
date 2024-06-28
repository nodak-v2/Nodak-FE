import { useRef } from 'react';

import Icon from '@/src/components/Icon';
import { IconName } from '@/src/components/Icon/type';

import { useImageUpload } from './hooks/useImageUpload';

interface ImageUploadButtonProps {
  setImageUrl: (imageUrl: string) => void;
  onChange: (imageUrl: string) => void;
  iconId?: IconName;
}

const ImageUploadButton = ({
  iconId = 'camera',
  onChange,
  setImageUrl,
}: ImageUploadButtonProps) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const imageUpload = useImageUpload();

  const handleImageSelect = async () => {
    const file = inputElement.current?.files?.[0];
    if (!file) return;

    const imageUrl = await imageUpload(file);
    setImageUrl(imageUrl);
    onChange(imageUrl);
  };

  return (
    <div>
      <label htmlFor='imageUploadButton'>
        <div className='border-gray-accent5 flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full border bg-white text-gray-accent2'>
          <Icon id={iconId} aria-label='이미지 업로드하기' />
        </div>
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
  );
};

export default ImageUploadButton;
