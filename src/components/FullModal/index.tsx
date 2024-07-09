import React, { PropsWithChildren } from 'react';

import { createPortal } from 'react-dom';

import { cn } from '@/src/utils/cn';

import Icon from '../Icon';
import TopBar from '../Topbar';

interface FullModalProps {
  show: boolean;
  onClose: () => void;
  backgroundClassName?: string;
  contentClassName?: string;
}

const FullModal = ({
  show,
  onClose,
  backgroundClassName,
  children,
}: PropsWithChildren<FullModalProps>) => {
  const modalRoot = document.getElementById('layout-Root');

  if (!show || !modalRoot) {
    return null;
  }

  return createPortal(
    <div
      className={cn(
        'z-100 absolute flex h-full w-full flex-col bg-black',
        backgroundClassName,
      )}
    >
      <TopBar.Container>
        <Icon id='close-x' onClick={onClose} />
      </TopBar.Container>
      {children}
    </div>,
    modalRoot,
  );
};

export default FullModal;
