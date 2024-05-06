import { PostDetail } from '@/src/apis/types';

export const getPostDetail = async (postId: string) => {
  const data = (await fetch(`posts/${postId}`)).json() as Promise<PostDetail>;

  return data;
};
