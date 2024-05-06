import { ReactNode } from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

const chipCSS = cva(
  'flex w-fit items-center whitespace-nowrap rounded-lg px-3 py-1 text-sm font-semibold',
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

type ChipProps = VariantProps<typeof chipCSS> & {
  children: ReactNode;
};

const Chip = ({ children, variant, ...props }: ChipProps) => {
  return (
    <div className={chipCSS({ variant })} {...props}>
      {children}
    </div>
  );
};

export default Chip;
