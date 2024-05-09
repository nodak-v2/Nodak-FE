'use server';

import { revalidateTag } from 'next/cache';

import { createFavorite, deleteFavorite } from '@/src/apis/post';

export const favoriteAction = (formData: FormData) => {
  const postId = formData.get('postId') as string;
  const isChecked = formData.get('isChecked') === 'true';
  revalidateTag('post');

  if (isChecked) {
    deleteFavorite(postId);
    return;
  }

  createFavorite(postId);
};
