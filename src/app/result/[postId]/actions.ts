'use server';

import { revalidateTag } from 'next/cache';

import { createLike, deleteLike } from '@/src/apis/post';

interface Args {
  postId: string;
  isChecked: boolean;
}

export const updateLike = ({ postId, isChecked }: Args) => {
  revalidateTag('post');

  if (isChecked) {
    deleteLike(postId);
    return;
  }

  createLike(postId);
};
