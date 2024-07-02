'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useGetPostDetailAPI } from '@/src/apis/postDetail';
import { useGetVoteDetailAPI } from '@/src/apis/vote';
import Icon from '@/src/components/Icon';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import { cn } from '@/src/utils/cn';

import { useCreateVote } from '../../hooks/useCreateVote';
import useTerminateVote from '../../hooks/useTerminateVote';

const VoteForm = () => {
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { postId } = useParams() as { postId: string };
  const { voteOptions, voteTitle, totalNumber, voteId } =
    useGetVoteDetailAPI(postId);

  const { isAuthor } = useGetPostDetailAPI(postId);

  const createVote = useCreateVote(String(voteId), postId);
  const terminateVote = useTerminateVote(postId);

  const handleOptionChange = (id: number) => {
    setSelectedOption(id);
  };

  const handleVote = () => {
    if (selectedOption === null) return;
    createVote(selectedOption);
  };

  const handleTerminateVote = () => {
    terminateVote();
  };

  const handelCloseModal = () => {
    setIsShowModal(false);
  };

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  return (
    <div className='flex items-center justify-center rounded-[8px] bg-gray-accent1'>
      <div className='flex w-full flex-col gap-6 p-4'>
        <div>
          <span className='font-h3-sm'>{voteTitle}</span>
          <p className='font-text-3-rg text-gray-accent4'>
            {totalNumber}명 참여
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          {voteOptions.map(
            ({ voteOptionContent, voteOptionId, seq, voteOptionImageUrl }) => (
              <label
                key={voteOptionId}
                className='relative flex items-center gap-4 rounded-[8px] border border-gray-accent3 px-3 py-2'
              >
                <input
                  type='radio'
                  name='vote'
                  value={voteOptionId}
                  checked={selectedOption === seq}
                  onChange={() => handleOptionChange(seq)}
                  className='hidden'
                />
                {!isAuthor &&
                  (selectedOption === seq ? (
                    <Icon id='select-vote' size={24} />
                  ) : (
                    <Icon id='select-default' size={24} />
                  ))}
                <span className='font-text-1-rg'>{voteOptionContent}</span>
                {voteOptionImageUrl && (
                  <Image
                    src={voteOptionImageUrl}
                    alt='투표이미지'
                    width={24}
                    height={24}
                    className='absolute right-[10px] z-0 max-h-[24px] max-w-[24px] rounded-[4px]'
                  />
                )}
              </label>
            ),
          )}
        </div>
        {isAuthor ? (
          <button
            className='font-title-1-md w-full rounded-lg bg-sub py-3 text-primary'
            onClick={handleOpenModal}
          >
            투표 종료하기
          </button>
        ) : (
          <button
            className={cn(
              `font-title-1-md w-full rounded-lg bg-sub py-3 text-primary`,
              selectedOption === null &&
                'cursor-not-allowed bg-gray-accent2 text-white',
            )}
            onClick={handleVote}
          >
            투표하기
          </button>
        )}
      </div>
      <ConfirmationModal
        isShow={isShowModal}
        description='투표를 종료하시겠습니까?'
        onClose={handelCloseModal}
        onConfirm={handleTerminateVote}
      />
    </div>
  );
};

export default VoteForm;
