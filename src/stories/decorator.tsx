import { type Decorator } from '@storybook/react';

export const PageLayoutDecorator: Decorator = Story => (
  <div
    id='layout-Root'
    className='relative flex h-[844px] w-full min-w-[350px] max-w-[450px] shrink-0 flex-col items-center justify-center shadow-xl'
  >
    <div className='w-full grow p-4 text-white'>
      <Story />
    </div>
  </div>
);
