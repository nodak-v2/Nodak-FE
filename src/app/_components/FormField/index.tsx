import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { cn } from '@/src/utils/cn';

interface FormFieldProps
  extends PropsWithChildren,
    ComponentPropsWithoutRef<'div'> {
  labelText: string;
  isRequired?: boolean;
  currentLength?: number;
  maxLength?: number;
  error?: string | undefined;
}

const FormField = ({
  labelText,
  isRequired = false,
  currentLength = 0,
  maxLength,
  children,
  className,
  error,
  ...props
}: FormFieldProps) => {
  return (
    <div className={cn('flex flex-col gap-2', className)} {...props}>
      <div className='flex justify-between'>
        <label className='text-sm text-gray-accent2'>
          {labelText}
          {isRequired && <span className='ml-0.5 text-red-500'>*</span>}
        </label>
        {maxLength && (
          <span className='text-xs text-gray-accent2'>{`${currentLength}/${maxLength}`}</span>
        )}
      </div>
      {children}
      {error && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  );
};

export default FormField;
