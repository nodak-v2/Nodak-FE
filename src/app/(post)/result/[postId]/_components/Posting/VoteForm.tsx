'use client';

// pages/index.js
import { useState } from 'react';

import { useParams } from 'next/navigation';

import { useGetVoteDetailAPI } from '@/src/apis/vote';
import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

import { useCreateVote } from '../../hooks/useCreateVote';

const VoteForm = () => {
  const [selectedOption, setSelectedOption] = useState<null | number>(null);

  const { postId } = useParams() as { postId: string };
  const { voteOptions, voteTitle, totalNumber, voteId } =
    useGetVoteDetailAPI(postId);

  const createVote = useCreateVote(String(voteId), postId);

  const handleOptionChange = (id: number) => {
    setSelectedOption(id);
  };

  const handleVote = () => {
    if (selectedOption === null) return;
    createVote(selectedOption);
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='flex w-full flex-col gap-6 rounded-lg p-4 text-white shadow-lg'>
        <div>
          <span className='font-bold'>{voteTitle}</span>
          <p className='text-sm text-gray-400'>{totalNumber}명 참여</p>
        </div>
        <div className='flex flex-col gap-3'>
          {voteOptions.map(({ voteOptionContent, voteOptionId, seq }) => (
            <label
              key={voteOptionId}
              className='flex items-center gap-4 rounded-[8px] border border-gray-accent3 px-3 py-2'
            >
              <input
                type='radio'
                name='vote'
                value={voteOptionId}
                checked={selectedOption === seq}
                onChange={() => handleOptionChange(seq)}
                className='hidden'
              />
              {selectedOption === seq ? (
                <Icon id='select-vote' size={24} />
              ) : (
                <Icon id='select-default' size={24} />
              )}
              <span>{voteOptionContent}</span>
            </label>
          ))}
        </div>
        <button
          className={cn(`w-full rounded-lg bg-[#53251D] py-2 text-[#FF614B]`, {
            'cursor-not-allowed bg-gray-accent2 text-white':
              selectedOption === null,
          })}
          onClick={handleVote}
        >
          투표하기
        </button>
      </div>
    </div>
  );
};

export default VoteForm;
