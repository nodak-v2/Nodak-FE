import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/src/utils/cn';

const textareaCSS = cva(
  'h-[150px] w-full resize-none appearance-none rounded-lg border-2 p-3 placeholder-gray-500 outline-none',
  {
    variants: {
      variant: {
        default: 'border-gray-300 bg-transparent ',
        filled: 'border-gray-200 bg-gray-200 ',
        error: 'ring-2 ring-red-500',
      },
      isDisabled: {
        false: '',
        true: 'bg-gray-accent7 cursor-not-allowed placeholder-gray-accent3',
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
