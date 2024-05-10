'use server';

import { revalidateTag } from 'next/cache';

import { doVote } from '@/src/apis/vote';

export const doVoteAction = async (voteId: number, formData: FormData) => {
  const selectedOptionIndex = formData.getAll('option')[0];

  doVote(voteId, +selectedOptionIndex + 1);

  revalidateTag('post');
};
