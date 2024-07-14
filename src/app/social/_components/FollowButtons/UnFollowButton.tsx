import { useDeleteFollowAPI } from '@/src/apis/follow';
import Button from '@/src/components/Button/Button';
import ConfirmationModal from '@/src/components/Modal/ConfirmationModal';
import useModal from '@/src/hooks/useModal';

interface FollowButtonProps {
  userId: number;
}

const UnFollowButton = ({ userId }: FollowButtonProps) => {
  const deleteFollow = useDeleteFollowAPI(userId.toString());
  const { isOpen, open, close } = useModal();

  const handleUnFollow = () => {
    deleteFollow();
    close();
  };

  return (
    <>
      <Button
        className='font-title-1-md w-[90px]  py-2'
        baseColor='primaryInverted'
        onClick={open}
      >
        팔로잉
      </Button>
      <ConfirmationModal
        isShow={isOpen}
        description='팔로우를 취소하시겠습니까?'
        onClose={close}
        onConfirm={handleUnFollow}
      />
    </>
  );
};

export default UnFollowButton;
