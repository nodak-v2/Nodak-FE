import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/src/utils/cn';

const textareaCSS = cva(
  'font-text-1-rg h-[150px] w-full resize-none appearance-none rounded-lg border-2 p-3 text-white placeholder-gray-accent1 outline-none',
  {
    variants: {
      variant: {
        default: 'border-gray-accent1 bg-transparent ',
        filled: 'border-gray-accent1',
        error: 'bg-transparent ring-1 ring-red-500',
      },
      isDisabled: {
        false: '',
        true: ' cursor-not-allowed placeholder-gray-accent2',
      },
    },
    defaultVariants: {
      variant: 'default',
      isDisabled: false,
    },
  },
);

type TextareaProps = ComponentPropsWithoutRef<'textarea'> &
  VariantProps<typeof textareaCSS>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, className, ...props }, ref) => {
    const { disabled: isDisabled } = props;

    return (
      <textarea
        ref={ref}
        className={cn(textareaCSS({ variant, isDisabled }), className)}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
export default Textarea;
