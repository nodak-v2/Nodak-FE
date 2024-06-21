import { ToastOptions, toast } from 'react-toastify';

import { cn } from '@/src/utils/cn';

const defaultToastOption: ToastOptions = {
  position: 'bottom-center',
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
  icon: false,
};

const Toast = {
  default: (
    message: string,
    options: ToastOptions = {},
    className?: string,
  ) => {
    toast.info(message, {
      ...defaultToastOption,
      ...options,
      className: cn(
        'font-text-1-rg h-[44px] w-[358px] rounded-lg bg-[#2D3033] text-white',
        className,
      ),
    });
  },
};

export default Toast;
