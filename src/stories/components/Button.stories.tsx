import { Meta, StoryObj } from '@storybook/react';

import Button from '@/src/app/_components/Button/Button';

const meta = {
  title: 'components/Button',
  tags: ['autodocs'],
  component: Button,
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본',
    baseColor: 'dark',
    disabled: false,
  },
};
export const DefaultDisabled: Story = {
  args: {
    children: '기본 비활성화',
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary 색',
    baseColor: 'primary',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: 'Primary 색 비활성화',
    baseColor: 'primary',
    disabled: true,
  },
};
