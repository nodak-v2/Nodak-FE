'use client';

import Icon from '@/src/components/Icon';

interface LikeIconProps {
  postId: string;
  isChecked: boolean;
}

const LikeIcon = ({ postId, isChecked }: LikeIconProps) => {
  const handleClick = () => {
    //Todo: 좋아요 요청
    console.log(postId);
  };

  return (
    <button onClick={handleClick}>
      <Icon
        id={isChecked ? 'heart-fill' : 'heart'}
        size={24}
        className='text-pink-500'
      />
    </button>
  );
};

export default LikeIcon;
