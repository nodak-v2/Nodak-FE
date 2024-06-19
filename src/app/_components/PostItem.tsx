import Image from 'next/image';

import { PostListContent } from '@/src/apis/postList';
import { isValidImageUrl } from '@/src/app/(main)/utils';
import Icon from '@/src/components/Icon';

interface PostItemProps {
  post: PostListContent;
}

const PostItem = ({ post }: PostItemProps) => {
  const {
    title,
    voterCount: votedCount,
    likeCount: likedCount,
    commentCount: commentedCount,
    author,
    postImageUrl: imageUrl,
    createdAt,
  } = post;

  const validatedImageUrl = isValidImageUrl(imageUrl)
    ? imageUrl
    : '/placeHolder_130.png';

  return (
    <div className='flex w-full gap-4 border-b border-gray-accent2 p-4 pb-4'>
      <div className='flex w-full flex-col justify-between gap-1'>
        <span className='font-h4-sm'>{title}</span>
        <div className='flex items-center gap-1'>
          <Icon id='check' size={16} />
          <span className='font-text-1-rg'>{`총 ${votedCount}명 투표중`}</span>
        </div>
        <div className='flex items-center gap-4'>
          <span className='font-text-3-rg flex items-center gap-2'>
            <span>{author}</span>
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
      <Image
        src={validatedImageUrl}
        alt='게시글이미지'
        width={60}
        height={60}
        className='aspect-square h-fit self-center rounded-md object-cover'
      />
    </div>
  );
};

export default PostItem;
