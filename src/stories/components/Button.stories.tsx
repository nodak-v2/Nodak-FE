import { Meta, StoryObj } from '@storybook/react';

import Button from '@/src/app/_components/Button/Button';

export default {
  title: 'components/Button',
  tags: ['autodocs'],
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '화이트 모드',
    isDark: false,
  },
};

export const DefaultDisabled: Story = {
  args: {
    children: '비활성화된 화이트 모드',
    isDark: false,
    disabled: true,
  },
};
export const DarkMode: Story = {
  args: {
    children: '다크 모드',
  },
};

export const DarkModeDisabled: Story = {
  args: {
    children: '비활성화된 다크 모드',
    disabled: true,
  },
};
