import Image from 'next/image';

import Icon from '@/src/app/_components/Icon';

const post = {
  title: '게시글 제목입니다.',
  votedCount: 10,
  likedCount: 10,
  commentedCount: 10,
  author: 'homin',
  profileImageUrl: 'https://via.placeholder.com/150',
  imageUrl: 'https://via.placeholder.com/150',
  createdAt: '2021-10-10',
};

const PostItem = () => {
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
    <div className='flex w-full justify-start gap-4 bg-[#343A40] p-4 text-white'>
      <Image src={imageUrl} alt='게시글이미지' width={130} height={130} />
      <div className='flex w-full flex-col gap-4'>
        <div className='flex flex-col gap-0.5'>
          <span>{title}</span>
          <span className='text-xs text-gray-200'>{`총 ${votedCount}명 투표`}</span>
          <span className='text-xs text-gray-200'>{createdAt}</span>
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
            <span className='text-sm text-gray-100'>{author}</span>
          </span>
          <span className='flex gap-2 text-[#F0F0F0]'>
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
