import axios from 'axios';

import { Post } from '@/src/apis/types';

export const getPostDetail = async (postId: number) => {
  const { data } = await axios.get<Post>(`posts/${postId}`);

  return data;
};
