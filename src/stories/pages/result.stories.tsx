import { Meta, StoryObj } from '@storybook/react';

import Page from '@/src/app/result/[postId]/page';
import { PageLayoutDecorator } from '@/src/stories/decorator';

const meta = {
  title: 'pages/result',
  tags: ['autodocs'],
  decorators: [PageLayoutDecorator],
  component: Page,
} satisfies Meta<typeof Page>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
