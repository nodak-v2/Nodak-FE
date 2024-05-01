import { ButtonHTMLAttributes } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/src/utils/cn';

type ButtonVariantProps = VariantProps<typeof button>;
const button = cva(
  'h-10 cursor-pointer rounded-md border bg-white px-2.5 py-2 enabled:active:text-white disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      isDark: {
        true: 'border-dark-accent1 text-dark-accent1 enabled:active:bg-dark-accent1',
        false:
          'border-primary-accent1 text-primary-accent1 enabled:active:bg-primary-accent1',
      },
    },
    defaultVariants: {
      isDark: true,
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

const Button = ({ className, isDark, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(button({ isDark }), className)} {...props}>
      {children}
    </button>
  );
};
export default Button;
