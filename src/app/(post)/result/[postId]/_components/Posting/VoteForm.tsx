'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useGetPostDetailAPI } from '@/src/apis/postDetail';
import { useGetVoteDetailAPI } from '@/src/apis/vote';
import FullImageModal from '@/src/components/FullImageModal';
import Icon from '@/src/components/Icon';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import { cn } from '@/src/utils/cn';

import { useCreateVote } from '../../hooks/useCreateVote';
import useTerminateVote from '../../hooks/useTerminateVote';

type ImageModal = { isVisible: boolean; url: string };

const VoteForm = () => {
  const [selectedOption, setSelectedOption] = useState<null | number>(null);

  const [isShowTerminateModal, setIsShowTerminateModal] = useState(false);

  const [imageModalState, setImageModalState] = useState<ImageModal>({
    isVisible: false,
    url: '',
  });

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

  const handleTerminateModal = (isVisible: boolean) => () => {
    setIsShowTerminateModal(isVisible);
  };

  const handleImageModal =
    (state: { isVisible: boolean; url: string }) => () => {
      setImageModalState(state);
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
                    className='absolute right-[10px] max-h-[24px] max-w-[24px] rounded-[4px]'
                    onClick={handleImageModal({
                      isVisible: true,
                      url: voteOptionImageUrl,
                    })}
                  />
                )}
              </label>
            ),
          )}
        </div>
        {isAuthor ? (
          <button
            className='font-title-1-md w-full rounded-lg bg-sub py-3 text-primary'
            onClick={handleTerminateModal(true)}
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
        isShow={isShowTerminateModal}
        description='투표를 종료하시겠습니까?'
        onClose={handleTerminateModal(false)}
        onConfirm={handleTerminateVote}
      />
      <FullImageModal
        isShow={imageModalState.isVisible}
        onClose={handleImageModal({ isVisible: false, url: '' })}
        imageUrl={imageModalState.url}
        altText='항목 상세 이미지'
      />
    </div>
  );
};

export default VoteForm;
