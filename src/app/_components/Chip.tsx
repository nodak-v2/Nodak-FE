import { ButtonHTMLAttributes } from 'react';
import { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

const chipCSS = cva(
  'flex w-fit items-center whitespace-nowrap rounded-[20px] border border-gray-accent2 px-4 py-2 text-sm font-semibold',
  {
    variants: {
      variant: {
        default: 'bg-background text-gray-accent4',
        selected: 'bg-sub text-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof chipCSS> & {
    children: ReactNode;
  };

const Chip = ({ children, variant, ...props }: ChipProps) => {
  return (
    <button className={chipCSS({ variant })} {...props}>
      {children}
    </button>
  );
};

export default Chip;
