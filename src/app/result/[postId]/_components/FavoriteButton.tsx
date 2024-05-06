'use client';

import Icon from '@/src/components/Icon';

interface FavoriteButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  postId: string;
  isChecked: boolean;
}

const FavoriteButton = ({
  postId,
  isChecked,
  ...props
}: FavoriteButtonProps) => {
  const handleClick = () => {
    //Todo: 찜 요청
    console.log(postId);
  };

  return (
    <button onClick={handleClick} {...props}>
      <Icon
        id={isChecked ? 'heart-fill' : 'heart'}
        size={24}
        className='text-pink-500'
        style={{ fill: 'pink' }}
      />
    </button>
  );
};

export default FavoriteButton;
