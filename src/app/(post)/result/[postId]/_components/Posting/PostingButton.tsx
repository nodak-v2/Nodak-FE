import { useParams } from 'next/navigation';

import { useGetPostDetailAPI } from '@/src/apis/postDetail';
import Icon from '@/src/components/Icon';

import { usePostingLike } from '../../hooks/usePostingLike';

const CategoryChip = ({ category }: { category: string }) => {
  return (
    <div className='font-text-2-md flex items-center rounded-[30px] border border-gray-accent2 px-3 py-0.5 text-gray-accent4'>
      {category}
    </div>
  );
};

const PostingButton = () => {
  const { postId } = useParams() as { postId: string };
  const {
    starCount,
    commentSize,
    checkStar: isLike,
    categoryName,
  } = useGetPostDetailAPI(postId);

  const { postLike, deleteLike } = usePostingLike(postId);

  const handleLike = () => {
    isLike ? deleteLike() : postLike();
  };

  return (
    <div className='flex justify-between px-4'>
      <CategoryChip category={categoryName} />
      <div className='flex items-center gap-2'>
        <div
          className='flex cursor-pointer items-center gap-2'
          onClick={handleLike}
        >
          {isLike ? (
            <Icon id='heart-fill' size={24} />
          ) : (
            <Icon id='heart-line' size={24} />
          )}
          <span className='font-text-1-rg'>{starCount}</span>
        </div>
        <div className='flex items-center gap-2'>
          <Icon id='message' size={24} />
          <span className='font-text-1-rg'>{commentSize}</span>
        </div>
      </div>
    </div>
  );
};

export default PostingButton;
