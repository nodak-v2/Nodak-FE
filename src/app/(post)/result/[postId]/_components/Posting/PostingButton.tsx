import { useParams } from 'next/navigation';

import { useGetPostDetailAPI } from '@/src/apis/post';
import Icon from '@/src/components/Icon';

const CategoryChip = () => {
  return (
    <div className='font-text-2-md flex items-center rounded-[30px] border border-gray-accent2 px-3 py-0.5 text-gray-accent4'>
      전체
    </div>
  );
};

const PostingButton = () => {
  const { postId } = useParams() as { postId: string };
  const { starCount, commentSize } = useGetPostDetailAPI(postId);

  return (
    <div className='flex justify-between px-4'>
      <CategoryChip />
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-2'>
          <Icon id='heart-fill' size={24} className='text-primary' />
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
