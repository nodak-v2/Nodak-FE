import React, { ComponentProps } from 'react';

import { IconName } from './type';

interface IconProps extends ComponentProps<'svg'> {
  id: IconName;
  size?: number;
}

const Icon = ({ id, size = 20, ...props }: IconProps) => {
  return (
    <svg width={size} height={size} {...props}>
      <use href={`/icon-sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
