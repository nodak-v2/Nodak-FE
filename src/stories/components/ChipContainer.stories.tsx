import type { Meta } from '@storybook/react';

import ChipContainer from '@/src/app/main/_component/ChipContainer';

const meta: Meta<typeof ChipContainer> = {
  title: 'components/ChipSelect',
  tags: ['autodocs'],
  component: ChipContainer,
};

export default meta;

export const DefaultTemplate = () => {
  return <ChipContainer />;
};
