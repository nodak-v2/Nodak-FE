import { useRef } from 'react';

import Icon from '@/src/components/Icon';
import { IconName } from '@/src/components/Icon/type';

interface ImageUploadButtonProps {
  setImageUrl: (imageUrl: string) => void;
  onChange: (file: File) => void;
  iconId?: IconName;
}

const ImageUploadButton = ({
  setImageUrl,
  onChange,
  iconId = 'camera',
}: ImageUploadButtonProps) => {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleImageSelect = () => {
    const file = inputElement.current?.files?.[0];
    if (!file) return;

    onChange(file);

    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
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
