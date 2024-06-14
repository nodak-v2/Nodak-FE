import { Meta, StoryObj } from '@storybook/react';

const colorClassMap: Record<string, string> = {
  'gray-accent1': 'bg-gray-accent1',
  'gray-accent2': 'bg-gray-accent2',
  'dark-accent1': 'bg-dark-accent1',
  'dark-accent2': 'bg-dark-accent2',
  primary: 'bg-primary',
  sub: 'bg-sub',
  error: 'bg-error',
  background: 'bg-background',
  'grass-100': 'bg-grass-100',
  'grass-200': 'bg-grass-200',
  'grass-300': 'bg-grass-300',
  'grass-400': 'bg-grass-400',
  'grass-500': 'bg-grass-500',
};

const ColorBox = ({ color }: { color: string }) => (
  <>
    <div className={`h-20 w-20 ${colorClassMap[color]}`} />
    <span className='text-sm'>{color}</span>
  </>
);

const meta: Meta<typeof ColorBox> = {
  title: 'tailwindConfigure/Colors',
  tags: ['autodocs'],
  component: ColorBox,
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: Object.keys(colorClassMap),
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
  },
};
