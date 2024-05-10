'use server';

import { revalidateTag } from 'next/cache';

import { doVote } from '@/src/apis/vote';

export const doVoteAction = async (voteId: number, formData: FormData) => {
  const selectedOption = formData.getAll('option')[0];

  await doVote(voteId, +selectedOption + 1);

  revalidateTag('post');
};
