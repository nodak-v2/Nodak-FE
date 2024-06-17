import { ButtonHTMLAttributes } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/src/utils/cn';

type ButtonVariantProps = VariantProps<typeof button>;
const button = cva('', {
  variants: {
    baseColor: {
      dark: 'border-white bg-dark-accent1 enabled:active:text-dark-accent1',
      primary: 'border-primary bg-primary enabled:active:text-primary',
    },
    variant: {
      default:
        'rounded-md border px-2.5 py-2 text-white enabled:active:border-white enabled:active:bg-white disabled:cursor-not-allowed disabled:opacity-50',
      link: 'border-none bg-transparent text-primary enabled:hover:underline',
    },
  },
  defaultVariants: {
    baseColor: 'dark',
    variant: 'default',
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

const Button = ({
  className,
  baseColor,
  variant,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(button({ baseColor, variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
