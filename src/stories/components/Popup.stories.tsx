import { Meta } from '@storybook/react';

import Popup from '@/src/app/_components/Popup';

const meta: Meta<typeof Popup> = {
  title: 'components/Popup',
  tags: ['autodocs'],
  component: Popup,
};

export default meta;

export const DefaultTemplate = () => {
  return <Popup />;
};
