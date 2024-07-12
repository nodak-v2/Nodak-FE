import { usePostFollowAPI } from '@/src/apis/follow';
import Button from '@/src/components/Button/Button';

interface FollowButtonProps {
  userId: number;
}

const FollowButton = ({ userId }: FollowButtonProps) => {
  const postFollow = usePostFollowAPI(userId.toString());

  const handleFollow = () => postFollow();

  return (
    <Button
      className='font-title-1-md w-[90px]  py-2'
      baseColor='primary'
      onClick={handleFollow}
    >
      팔로우
    </Button>
  );
};

export default FollowButton;
