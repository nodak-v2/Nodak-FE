import { cva } from 'class-variance-authority';

import { cn } from '@/src/utils/cn';

import { TooltipDirection } from './Tooltip';

interface TooltipArrowProps {
  direction: TooltipDirection;
}

const tooltipArrowCSS = cva(
  'absolute left-1/2 h-0 w-0 border border-solid bg-transparent content-none ',
  {
    variants: {
      variant: {
        top: 'border-t-primary-100 left-1/2 top-full -translate-x-1/2 transform border-l-4 border-r-4 border-t-4 border-transparent',
        bottom:
          'border-b-primary-100 bottom-full left-1/2 -translate-x-1/2 transform border-b-4 border-l-4 border-r-4 border-transparent',
        left: 'border-l-primary-100 left-full top-1/2 -translate-y-1/2 transform border-b-4 border-l-4 border-t-4 border-transparent',
        right:
          'border-r-primary-100 right-full top-1/2 -translate-y-1/2 transform border-b-4 border-r-4 border-t-4 border-transparent',
      },
    },
    defaultVariants: {
      variant: 'top',
    },
  },
);

const TooltipArrow = ({ direction }: TooltipArrowProps) => {
  return <div className={cn(tooltipArrowCSS({ variant: direction }))}></div>;
};

export default TooltipArrow;
