import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/src/utils/cn';

const textInputCSS = cva(
  'w-full rounded-lg border p-3 text-white outline-none',
  {
    variants: {
      variant: {
        default: 'border-gray-accent3 bg-transparent',
        error: 'border-error bg-red-500 bg-opacity-10',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type TimeInputProps = ComponentPropsWithoutRef<'input'> &
  VariantProps<typeof textInputCSS>;

const TimeInput = forwardRef<HTMLInputElement, TimeInputProps>(
  ({ variant, className, ...props }, ref) => {
    const now = new Date();
    const minTime = new Date(now.getTime() + 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 16);
    const maxTime = new Date(now.getTime() + 72 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 16);

    return (
      <input
        type='datetime-local'
        ref={ref}
        className={cn(textInputCSS({ variant }), className)}
        min={minTime}
        max={maxTime}
        {...props}
      />
    );
  },
);

TimeInput.displayName = 'TimeInput';
export default TimeInput;
