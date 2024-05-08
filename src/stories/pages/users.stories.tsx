import { Meta, StoryObj } from '@storybook/react';

import UsersPage from '@/src/app/users/page';
import { PageLayoutDecorator } from '@/src/stories/decorator';

const meta = {
  title: 'pages/UsersPage',
  decorators: [PageLayoutDecorator],
  component: UsersPage,
} satisfies Meta<typeof UsersPage>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
