import React, { PropsWithChildren } from 'react';

import { createPortal } from 'react-dom';

interface ModalProps {
  show: boolean;
  onClose?: () => void;
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
    <div className={backgroundClassName} onClick={onClose}>
      <div className={contentClassName} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('layout-Root')!,
  );
};

export default Modal;
