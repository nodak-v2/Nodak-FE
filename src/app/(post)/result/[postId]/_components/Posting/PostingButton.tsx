import { useParams } from 'next/navigation';

import { useGetPostDetailAPI } from '@/src/apis/post';
import Icon from '@/src/components/Icon';

const CategoryChip = () => {
  return (
    <div className='flex items-center rounded-[30px] border border-gray-accent2 px-3 py-0.5 text-[12px] text-gray-accent2'>
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
      <div className='flex items-center gap-2 text-[14px]'>
        <div className='flex items-center gap-2'>
          <Icon id='heart-fill' size={24} className='text-[#FF614B]'></Icon>
          <span>{starCount}</span>
        </div>
        <div className='flex items-center gap-2'>
          <Icon id='message' size={24} />
          <span>{commentSize}</span>
        </div>
      </div>
    </div>
  );
};

export default PostingButton;
