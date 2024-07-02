import { useCallback, useEffect } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import CommentForm from '@/src/app/(post)/result/[postId]/_components/CommentModalForm/CommentForm';
import CommentModalButton from '@/src/app/(post)/result/[postId]/_components/CommentModalForm/CommentModalButton';
import Modal from '@/src/components/Modal';
import useModal from '@/src/hooks/useModal';

const CommentFormModal = () => {
  const router = useRouter();
  const pathWithoutParams = usePathname();
  const isExistedParams = useSearchParams().size > 0;
  const { isOpen, open, close } = useModal();

  const isClosed = !isOpen;

  const resetPath = useCallback(() => {
    router.push(pathWithoutParams);
  }, [router, pathWithoutParams]);

  useEffect(() => {
    console.log(isExistedParams);
    if (isExistedParams) open();
  }, [isExistedParams, open]);

  useEffect(() => {
    if (isClosed) resetPath();
  }, [isClosed, resetPath]);

  return (
    <>
      {isClosed && <CommentModalButton />}
      <Modal show={isOpen}>
        <CommentForm isOpenModal={isOpen} onCloseModal={close} />
      </Modal>
    </>
  );
};

export default CommentFormModal;
