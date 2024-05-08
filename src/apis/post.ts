import { PostDetail } from '@/src/apis/types';

export const getPostDetail = async (postId: string) => {
  const data = (
    await fetch(`${process.env.NEXT_PUBLIC_URL}/posts/${postId}`)
  ).json() as Promise<PostDetail>;

  return data;
};
