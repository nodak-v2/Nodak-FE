import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

import Tooltip from '../Tooltip/Tooltip';

interface FormFieldProps
  extends PropsWithChildren,
    ComponentPropsWithoutRef<'div'> {
  labelText: string;
  isRequired?: boolean;
  currentLength?: number;
  maxLength?: number;
  error?: string | undefined;
  childClassName?: string;
  description?: string;
}

const FormField = ({
  labelText,
  isRequired = false,
  currentLength = 0,
  maxLength,
  children,
  className,
  error,
  description,
  childClassName,
  ...props
}: FormFieldProps) => {
  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      <div className='flex justify-between'>
        <label className='font-title-1-md text-gray-accent2 text-white'>
          {labelText}
          {isRequired && <span className='ml-0.5 text-primary'>*</span>}
        </label>
        {maxLength && (
          <span className='text-xs text-gray-accent2'>{`${currentLength}/${maxLength}`}</span>
        )}
        {description && (
          <Tooltip
            direction='top'
            message={description}
            hasArrow
            type='hover'
            className='right-2 whitespace-nowrap bg-neutral-300 opacity-95'
          >
            <Icon
              id={'info-circle'}
              aria-label='필드 설명'
              className='opacity-75'
            />
          </Tooltip>
        )}
      </div>
      <div className={childClassName}>{children}</div>
      {error && <p className='text-sm text-error'>{error}</p>}
    </div>
  );
};

export default FormField;
