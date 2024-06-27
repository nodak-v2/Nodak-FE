import { PostRequestBody, useCreatePostAPI } from '@/src/apis/postDetail';

export const useCreatePost = () => {
  const createPost = useCreatePostAPI();

  return async (data: PostRequestBody) => await createPost(data);
};
