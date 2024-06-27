import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

import Tooltip from '../Tooltip/Tooltip';

interface FormFieldProps
  extends PropsWithChildren,
    ComponentPropsWithoutRef<'div'> {
  labelText: string;
  labelClassName?: string;
  isRequired?: boolean;
  error?: string | undefined;
  childClassName?: string;
  description?: string;
}

const FormField = ({
  labelText,
  labelClassName,
  isRequired = false,
  children,
  className,
  error,
  description,
  childClassName,
  ...props
}: FormFieldProps) => {
  return (
    <div className={cn('flex flex-col gap-3 px-4', className)} {...props}>
      <div className='flex justify-between'>
        <label className={cn('font-title-1-md text-white', labelClassName)}>
          {labelText}
          {isRequired && <span className='ml-0.5 text-primary'>*</span>}
        </label>
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
              className='mr-4 opacity-75'
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
