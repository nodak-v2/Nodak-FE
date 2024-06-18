import React, { ComponentProps } from 'react';

import { IconName } from './type';

interface IconProps extends ComponentProps<'svg'> {
  id: IconName;
  size?: number;
}

const Icon = ({ id, size = 20, width, height, ...props }: IconProps) => {
  return (
    <svg width={width ?? size} height={height ?? size} {...props}>
      <use href={`/icon-sprite.svg#${id}`} />
    </svg>
  );
};

export default Icon;
