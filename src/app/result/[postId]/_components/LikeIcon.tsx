'use client';

import { LikeAction } from '@/src/app/result/[postId]/actions';
import Icon from '@/src/components/Icon';

interface LikeIconProps {
  postId: string;
  isChecked: boolean;
}

const LikeIcon = ({ postId, isChecked }: LikeIconProps) => {
  return (
    <form action={LikeAction}>
      <input type='hidden' name='postId' value={postId} />
      <input
        type='hidden'
        name='isChecked'
        value={isChecked ? 'true' : 'false'}
      />
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
