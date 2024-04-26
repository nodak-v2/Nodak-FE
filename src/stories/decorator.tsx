import { type Decorator } from '@storybook/react';

import '../style/globals.css';

export const PageLayoutDecorator: Decorator = Story => (
  <div className='relative flex h-[600px] w-[350px] shrink-0 flex-col'>
    <Story />
  </div>
);
