import React, { PropsWithChildren } from 'react';

import { createPortal } from 'react-dom';

import { cn } from '@/src/utils/cn';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  backgroundClassName?: string;
  modalClassName?: string;
}

const Modal = ({
  show,
  onClose,
  backgroundClassName,
  modalClassName,
  children,
}: PropsWithChildren<ModalProps>) => {
  if (!show) {
    return null;
  }

  return createPortal(
    <div
      className={cn(
        'z-100 absolute bottom-0 left-0 right-0 top-0 flex w-full items-center justify-center bg-black bg-opacity-20',
        backgroundClassName,
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          'w-[290px] gap-6 rounded-lg bg-gray-accent2 px-4 pb-4 pt-6 shadow-xl',
          modalClassName,
        )}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('layout-Root')!,
  );
};

export default Modal;
