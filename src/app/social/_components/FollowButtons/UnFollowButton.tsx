import { useDeleteFollowAPI } from '@/src/apis/follow';
import Button from '@/src/components/Button/Button';

interface FollowButtonProps {
  userId: number;
}

const UnFollowButton = ({ userId }: FollowButtonProps) => {
  const deleteFollow = useDeleteFollowAPI(userId.toString());

  const handleUnFollow = () => deleteFollow();

  return (
    <Button
      className='font-title-1-md w-[90px]  py-2'
      baseColor='primaryInverted'
      onClick={handleUnFollow}
    >
      팔로잉
    </Button>
  );
};

export default UnFollowButton;
