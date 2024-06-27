import { usePostImageFileAPI } from '@/src/apis/image';

export const useImageUpload = () => {
  const userImageFileUpload = usePostImageFileAPI();

  return async (image: File) => {
    const { data, isBadRequest } = await userImageFileUpload(image);

    if (isBadRequest) throw new Error('이미지 업로드에 실패했습니다.');

    const { imagePath } = data;

    return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${imagePath}`;
  };
};
