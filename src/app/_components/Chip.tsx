import { ButtonHTMLAttributes } from 'react';
import { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

const chipCSS = cva(
  'text-title-1-md flex w-fit items-center whitespace-nowrap rounded-[30px] border border-gray-accent2 px-3 py-1.5',
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
