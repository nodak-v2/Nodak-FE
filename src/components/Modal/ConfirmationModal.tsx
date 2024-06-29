import Button from '@/src/components/Button/Button';
import Modal from '@/src/components/Modal';

interface ConfirmationModalProps {
  description: string;
  isShow: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal = ({
  description,
  isShow,
  onClose,
  onConfirm,
}: ConfirmationModalProps) => {
  return (
    <Modal
      show={isShow}
      onClose={onClose}
      backgroundClassName='z-100 absolute bottom-0 left-0 right-0 top-0 flex w-full items-center justify-center bg-black bg-opacity-80'
      contentClassName='flex w-[290px] flex-col gap-6 rounded-lg px-4 pb-4 pt-6 shadow-xl bg-gray-accent1'
    >
      <h2 className='font-h3-sm self-center text-white'>{description}</h2>
      <div className='flex gap-4'>
        <Button
          className='font-title-1-md w-full bg-gray-accent3 py-3'
          onClick={onClose}
        >
          취소
        </Button>
        <Button
          className='font-title-1-md w-full py-3'
          baseColor='primary'
          onClick={onConfirm}
        >
          확인
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
