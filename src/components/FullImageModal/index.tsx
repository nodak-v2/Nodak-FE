import Image from 'next/image';

import FullModal from '../FullModal';

interface FullImageModalProps {
  isShow: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

const FullImageModal = ({
  isShow,
  onClose,
  imageUrl,
  altText,
}: FullImageModalProps) => {
  return (
    <FullModal show={isShow} onClose={onClose}>
      <div className='flex h-full w-full items-center'>
        <div className='relative h-[260px] w-full'>
          <Image
            src={imageUrl}
            alt={altText}
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </FullModal>
  );
};

export default FullImageModal;
