import type { Meta } from '@storybook/react';

import Selector from '@/src/app/_components/Selector';

const meta: Meta<typeof Selector> = {
  title: 'components/Selector',
  tags: ['autodocs'],
  component: Selector,
};

export default meta;

export const DefaultTemplate = () => {
  return (
    <Selector
      items={[{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]}
      placeholder='테스트 1'
    />
  );
};
