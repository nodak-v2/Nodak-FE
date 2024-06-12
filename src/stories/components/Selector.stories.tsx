import type { Meta } from '@storybook/react';

import Selector from '@/src/components/Selector';

const meta: Meta<typeof Selector> = {
  title: 'components/Selector',
  tags: ['autodocs'],
  component: Selector,
};

export default meta;

export const DefaultTemplate = () => {
  return (
    <Selector items={['Item 1', 'Item 2', 'Item 3']} placeholder='테스트 1' />
  );
};
