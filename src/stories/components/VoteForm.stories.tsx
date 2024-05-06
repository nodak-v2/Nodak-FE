import { Meta, StoryObj } from '@storybook/react';

import VoteForm from '@/src/app/_components/VoteForm';

import { PageLayoutDecorator } from '../decorator';

const meta = {
  title: 'components/VoteForm',
  tags: ['autodocs'],
  decorators: PageLayoutDecorator,
  component: VoteForm,
} satisfies Meta<typeof VoteForm>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
