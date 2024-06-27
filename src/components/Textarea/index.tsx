import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/src/utils/cn';

const textareaCSS = cva(
  'font-text-1-rg h-[150px] w-full resize-none appearance-none rounded-lg border p-3 text-white placeholder-gray-accent3 outline-none',
  {
    variants: {
      variant: {
        default: 'border-gray-accent3 bg-transparent ',
        filled: 'border-gray-accent3',
        error: 'border-error bg-red-500 bg-opacity-10',
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
