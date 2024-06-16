import { usePostImageFileAPI } from '@/src/apis/image';

interface ImageUploadButtonProps {
  setImageUrl: (imageUrl: string) => void;
  onChange: (imageUrl: string) => void;
}
export const useImageUpload = ({
  setImageUrl,
  onChange,
}: ImageUploadButtonProps) => {
  const userImageFileUpload = usePostImageFileAPI();

  return async (image: File) => {
    const { data, isBadRequest } = await userImageFileUpload(image);

    if (isBadRequest) throw new Error('이미지 업로드에 실패했습니다.');

    const { imagePath } = data;

    setImageUrl(`${process.env.NEXT_PUBLIC_IMAGE_URL}/${imagePath}`);
    onChange(imagePath);
  };
};
