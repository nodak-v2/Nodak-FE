import { useMutation } from '@tanstack/react-query';

import { api } from '@/src/apis/core';

interface PostImageFileResponse {
  imagePath: string;
}

const postImageFile = (data: File) => {
  const formData = new FormData();

  formData.append('image', data);
  formData.append('path', data.name);

  return api.post<PostImageFileResponse>({
    url: '/files/images',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const usePostImageFileAPI = () => {
  return useMutation({
    mutationFn: async (data: File) => {
      const response = await postImageFile(data);

      return response.data;
    },
  });
};
