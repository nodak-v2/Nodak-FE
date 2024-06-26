import type { Meta, StoryObj } from '@storybook/react';

import ImageUploader from '@/src/app/users/profile/edit/ImageUploader';

const meta: Meta<typeof ImageUploader> = {
  title: 'components/ImageUpload',
  tags: ['autodocs'],
  component: ImageUploader,
};

export default meta;

type Story = StoryObj<typeof ImageUploader>;

export const Default: Story = {
  args: { onChange: () => {} },
};
