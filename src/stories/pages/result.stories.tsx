import { Meta, StoryObj } from '@storybook/react';

import ResultPage from '@/src/app/result/[postId]/page';
import { PageLayoutDecorator } from '@/src/stories/decorator';

const meta = {
  title: 'pages/result',
  tags: ['autodocs'],
  decorators: [PageLayoutDecorator],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  component: ResultPage,
} satisfies Meta<typeof ResultPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { params: { postId: '1' } },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/result/1',
      },
    },
  },
};
