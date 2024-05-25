'use server';

import { revalidateTag } from 'next/cache';

import { createLike, deleteLike } from '@/src/apis/post';

interface UpdateLikeArgs {
  postId: string;
  isChecked: boolean;
}

export const updateLike = ({ postId, isChecked }: UpdateLikeArgs) => {
  revalidateTag('post');

  isChecked ? deleteLike(postId) : createLike(postId);
};
