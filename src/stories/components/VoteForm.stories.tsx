import type { Meta, StoryObj } from '@storybook/react';

import VoteForm from '@/src/app/_components/VoteForm';
import { PageLayoutDecorator } from '@/src/stories/decorator';

const meta = {
  title: 'Components/Vote/Form',
  tags: ['autodocs'],
  component: VoteForm,
  decorators: PageLayoutDecorator,
  argTypes: {
    error: {
      options: [undefined, '1글자 이상 7글자 이하여야 합니다.'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof VoteForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {},
  },
};
