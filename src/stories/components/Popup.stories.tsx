import { Meta } from '@storybook/react';

import Popup from '@/src/components/POPup';

const meta: Meta<typeof Popup> = {
  title: 'components/Popup',
  tags: ['autodocs'],
  component: Popup,
};

export default meta;

export const DefaultTemplate = () => {
  return <Popup />;
};
