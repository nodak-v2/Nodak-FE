import Image from 'next/image';

import { PostListContent } from '@/src/apis/postList';
import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';
import { isValidImageUrl } from '@/src/utils/isValidImageUrl';

interface PostItemProps {
  post: PostListContent;
  isNickname?: boolean;
}

const convertOptionsToString = (options: string[]) => {
  const result = [] as string[];
  let remainingCount = 0;

  for (const option of options) {
    if (result.join('').length + option.length > 10) {
      remainingCount = options.length - result.length;
      break;
    }
    result.push(option);
  }

  if (remainingCount > 0)
    return `${result.join(',')} 외 ${remainingCount}개 투표 진행 중`;

  return `${result.join(',')} 투표 진행 중`;
};

const PostItem = ({ post, isNickname = true }: PostItemProps) => {
  const {
    voteTitle,
    likeCount: likedCount,
    commentCount: commentedCount,
    author,
    createdAt,
    voteOptions,
    terminated: isTerminated,
  } = post;

  const representativeImageUrl = voteOptions
    .map(({ imageUrl }) => imageUrl)
    .filter(url => url)[0];

  const onGoingVote = voteOptions
    .map(({ option }) => option)
    .sort((a, b) => a.length - b.length);

  return (
    <div className='flex w-full gap-4 border-b border-gray-accent2 p-4 pb-4'>
      <div className='flex w-full flex-col justify-between gap-1'>
        <span className='font-h4-sm'>{voteTitle}</span>
        <div
          className={cn(
            'flex items-center gap-1',
            isTerminated && 'text-gray-accent3',
          )}
        >
          <Icon
            id='check'
            size={16}
            className={cn(!isTerminated && 'text-primary')}
          />
          <span className='font-text-1-rg'>{`${isTerminated ? '투표 종료' : convertOptionsToString(onGoingVote)}`}</span>
        </div>
        <div className='flex items-center gap-4'>
          <span className='font-text-3-rg flex items-center gap-2'>
            {isNickname ? (
              <span className='font-text-3-rg'>{author}</span>
            ) : null}
            <span className='text-gray-accent3'>{createdAt}</span>
          </span>
          <span className='flex items-center gap-2 text-gray-accent4'>
            <span className='font-text-3-rg flex items-center gap-1'>
              <Icon id='heart' aria-label='좋아요 수' size={12} />
              <span className='font-text-3-rg'>{likedCount}</span>
            </span>
            <span className='flex items-center gap-1'>
              <Icon id='comment' aria-label='댓글 수' size={12} />
              <span className='font-text-3-rg'>{commentedCount}</span>
            </span>
          </span>
        </div>
      </div>
      {isValidImageUrl(representativeImageUrl) && (
        <Image
          src={representativeImageUrl}
          alt='게시글이미지'
          width={60}
          height={60}
          className='aspect-square h-fit self-center rounded-md object-cover'
        />
      )}
    </div>
  );
};

export default PostItem;
