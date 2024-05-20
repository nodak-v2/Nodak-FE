'use server';

import { revalidateTag } from 'next/cache';

import { createLike, deleteLike } from '@/src/apis/post';
import { doVote } from '@/src/apis/vote';

interface UpdateLikeArgs {
  postId: string;
  isChecked: boolean;
}

export const doVoteAction = async (voteId: number, formData: FormData) => {
  const selectedOptionIndex = formData.getAll('option')[0];

  doVote(voteId, +selectedOptionIndex + 1);

  revalidateTag('post');
};

export const updateLike = ({ postId, isChecked }: UpdateLikeArgs) => {
  revalidateTag('post');

  isChecked ? deleteLike(postId) : createLike(postId);
};
