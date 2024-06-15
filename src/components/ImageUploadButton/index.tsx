import { useRef } from 'react';

import { usePostImageFileAPI } from '@/src/apis/image';
import Icon from '@/src/components/Icon';
import { IconName } from '@/src/components/Icon/type';

interface ImageUploadButtonProps {
  setImageUrl: (imageUrl: string) => void;
  onChange: (imageUrl: string) => void;
  iconId?: IconName;
}

const ImageUploadButton = ({
  setImageUrl,
  onChange,
  iconId = 'camera',
}: ImageUploadButtonProps) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const { mutateAsync } = usePostImageFileAPI();

  const handleImageSelect = async () => {
    const file = inputElement.current?.files?.[0];
    if (!file) return;

    const responseData = await mutateAsync(file);

    if (!('imagePath' in responseData))
      throw new Error('이미지 업로드에 실패했습니다.');

    setImageUrl(
      `${process.env.NEXT_PUBLIC_IMAGE_URL}/${responseData.imagePath}`,
    );
    onChange(responseData.imagePath);
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
