import { type Decorator } from '@storybook/react';

import '../style/globals.css';

export const PageLayoutDecorator: Decorator = Story => (
  <div className='relative flex h-full max-h-[950px] min-h-[600px] w-full min-w-[350px] max-w-[450px] shrink-0 flex-col '>
    <Story />
  </div>
);
