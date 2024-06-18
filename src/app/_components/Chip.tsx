import { ButtonHTMLAttributes } from 'react';
import { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

const chipCSS = cva(
  'flex w-fit items-center whitespace-nowrap rounded-full border border-gray-accent2 px-3 py-1 text-sm font-semibold',
  {
    variants: {
      variant: {
        default: 'bg-zinc-700 text-white',
        selected: 'bg-zinc-200 text-black',
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
