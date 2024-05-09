'use client';

import { updateLike } from '@/src/app/result/[postId]/actions';
import Icon from '@/src/components/Icon';

interface LikeIconProps {
  postId: string;
  isChecked: boolean;
}

const LikeIcon = ({ postId, isChecked }: LikeIconProps) => {
  const updateLikeWithArgs = updateLike.bind(null, { postId, isChecked });

  return (
    <form action={updateLikeWithArgs}>
      <button>
        <Icon
          id={isChecked ? 'heart-fill' : 'heart'}
          size={24}
          className='text-pink-500'
        />
      </button>
    </form>
  );
};

export default LikeIcon;
