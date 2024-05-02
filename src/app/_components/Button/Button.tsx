import { ButtonHTMLAttributes } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/src/utils/cn';

type ButtonVariantProps = VariantProps<typeof button>;
const button = cva(
  'rounded-md border px-2.5 py-2 text-white enabled:active:bg-white disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      baseColor: {
        dark: 'border-dark-accent1 bg-dark-accent1 enabled:active:text-dark-accent1',
        primary:
          'border-primary-accent1 bg-primary-accent1 enabled:active:text-primary-accent1',
      },
    },
    defaultVariants: {
      baseColor: 'dark',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

const Button = ({ className, baseColor, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(button({ baseColor }), className)} {...props}>
      {children}
    </button>
  );
};
export default Button;
