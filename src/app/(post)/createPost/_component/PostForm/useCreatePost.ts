import { type PostRequestBody, useCreatePostAPI } from '@/src/apis/createPost';

export const useCreatePost = () => {
  const createPost = useCreatePostAPI();

  return async (data: PostRequestBody) => await createPost(data);
};
