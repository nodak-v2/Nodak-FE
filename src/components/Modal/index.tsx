import React, { PropsWithChildren } from 'react';

import { createPortal } from 'react-dom';

import { cn } from '@/src/utils/cn';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  backgroundClassName?: string;
  contentClassName?: string;
}

const Modal = ({
  show,
  onClose,
  backgroundClassName,
  contentClassName,
  children,
}: PropsWithChildren<ModalProps>) => {
  if (!show) {
    return null;
  }

  return createPortal(
    <div
      className={cn(
        'z-100 absolute bottom-0 left-0 right-0 top-0 flex w-full items-center justify-center bg-black bg-opacity-80',
        backgroundClassName,
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          'flex w-[290px] flex-col gap-6 rounded-lg bg-gray-accent1 px-4 pb-4 pt-6 shadow-xl',
          contentClassName,
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
