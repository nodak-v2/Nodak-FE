import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

const fontClasses = [
  'font-h1-sm',
  'font-h2-sm',
  'font-h3-sm',
  'font-h4-sm',
  'font-title-1-md',
  'font-title-2-sm',
  'font-text-1-rg',
  'font-text-2-md',
  'font-text-3-rg',
  'font-text-4-rg',
];

const FontBox = ({ font }: { font: string }) => (
  <>
    <div className={font}>{font}</div>
    <span className='text-sm'>{font}</span>
  </>
);

const meta: Meta<typeof FontBox> = {
  title: 'tailwindConfigure/Fonts',
  tags: ['autodocs'],
  component: FontBox,
  argTypes: {
    font: {
      control: {
        type: 'select',
      },
      options: fontClasses,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    font: 'font-h1-sm',
  },
};
