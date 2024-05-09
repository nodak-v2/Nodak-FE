'use server';

import { revalidateTag } from 'next/cache';

import { createLike, deleteLike } from '@/src/apis/post';

export const LikeAction = (formData: FormData) => {
  const postId = formData.get('postId') as string;
  const isChecked = formData.get('isChecked') === 'true';
  revalidateTag('post');

  if (isChecked) {
    deleteLike(postId);
    return;
  }

  createLike(postId);
};
