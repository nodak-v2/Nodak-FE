import type { Meta, StoryObj } from '@storybook/react';

import PostItem from '@/src/app/main/_component/PostItem';

import { PageLayoutDecorator } from '../decorator';

const meta: Meta<typeof PostItem> = {
  title: 'components/PostItem',
  tags: ['autodocs'],
  component: PostItem,
  decorators: PageLayoutDecorator,
};

export default meta;

type Story = StoryObj<typeof PostItem>;

export const DefaultTemplate: Story = {
  args: {
    size: 20,
    id: 'add',
  },
};
