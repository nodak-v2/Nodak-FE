import { usePostFollowAPI } from '@/src/apis/follow';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import Button from '@/src/components/Button/Button';

interface FollowButtonProps {
  userId: number;
}

const FollowButton = ({ userId }: FollowButtonProps) => {
  const { userId: myId } = useGetUserStatusAPI();
  const postFollow = usePostFollowAPI(userId.toString(), myId.toString());

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
