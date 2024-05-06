import React from 'react';

import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/app/globals.css';
import { handlers } from '../src/mocks/handlers';

initialize({ onUnhandledRequest: 'bypass' });
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers,
    },
  },
  loaders: [mswLoader],
  decorators: [
    Story => (
      <div id='layout-Root'>
        <Story />
      </div>
    ),
  ],
};

export default preview;
