import type { Meta, StoryObj } from '@storybook/react';

import VoteForm from '@/src/app/_components/VoteForm';
import { PageLayoutDecorator } from '@/src/stories/decorator';

const meta = {
  title: 'Components/Vote/Form',
  tags: ['autodocs'],
  component: VoteForm,
  decorators: PageLayoutDecorator,
} satisfies Meta<typeof VoteForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
