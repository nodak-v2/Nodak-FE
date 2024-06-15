import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/src/utils/cn';

const textInputCSS = cva(
  'font-text-1-rg w-full rounded-lg border-2 p-3 text-white placeholder-gray-accent1 outline-none',
  {
    variants: {
      variant: {
        default: 'border-gray-accent1 bg-transparent ',
        filled: 'border-gray-accent1 ',
        underline:
          'rounded-none border-0 border-b-2 border-gray-300 bg-transparent',
        error: 'bg-transparent ring-1 ring-red-500',
      },
      isDisabled: {
        false: '',
        true: 'bg-gray-accent7 cursor-not-allowed placeholder-gray-accent2',
      },
    },
    defaultVariants: {
      variant: 'default',
      isDisabled: false,
    },
  },
);

type TextInputProps = ComponentPropsWithoutRef<'input'> &
  VariantProps<typeof textInputCSS>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ variant, className, ...props }, ref) => {
    const { disabled: isDisabled } = props;

    return (
      <input
        ref={ref}
        className={cn(textInputCSS({ variant, isDisabled }), className)}
        {...props}
      />
    );
  },
);

TextInput.displayName = 'TextInput';
export default TextInput;
