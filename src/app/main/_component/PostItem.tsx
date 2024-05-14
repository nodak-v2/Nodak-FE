import Image from 'next/image';

import Icon from '@/src/components/Icon';

type PostType = {
  title: string;
  votedCount: number;
  likedCount: number;
  commentedCount: number;
  author: string;
  profileImageUrl: string;
  imageUrl: string;
  createdAt: string;
};

interface PostItemProps {
  post: PostType;
}

const PostItem = ({ post }: PostItemProps) => {
  const {
    title,
    votedCount,
    likedCount,
    commentedCount,
    author,
    profileImageUrl,
    imageUrl,
    createdAt,
  } = post;

  return (
    <div className='flex w-full cursor-pointer justify-start gap-4 border-b bg-dark-accent2 p-4 text-white'>
      <Image src={imageUrl} alt='게시글이미지' width={130} height={130} />
      <div className='flex w-full flex-col gap-4'>
        <div className='flex flex-col gap-0.5'>
          <span>{title}</span>
          <span className='text-xs text-gray-accent2'>{`총 ${votedCount}명 투표`}</span>
          <span className='text-xs text-gray-accent2'>{createdAt}</span>
        </div>
        <div className='flex w-full justify-between'>
          <span className='flex items-center gap-2'>
            <Image
              src={profileImageUrl}
              alt='사용자 프로필'
              className='rounded-full object-cover'
              width={20}
              height={20}
            />
            <span className='text-sm text-gray-accent1'>{author}</span>
          </span>
          <span className='flex gap-2 text-gray-accent1'>
            <span className='flex items-center gap-1'>
              <Icon id='heart' aria-label='좋아요 수' />
              <span>{likedCount}</span>
            </span>
            <span className='flex items-center gap-1'>
              <Icon id='comment' aria-label='댓글 수' />
              <span>{commentedCount}</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
