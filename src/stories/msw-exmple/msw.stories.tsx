import type { Meta, StoryObj } from '@storybook/react';

import { PageLayoutDecorator } from '@/src/stories/decorator';

import Msw from './msw';

export default {
  title: 'mocks/msw',
  component: Msw, // 원하는 페이지 컴포넌트
  decorators: PageLayoutDecorator, // 모바일 뷰 레이아웃 적용
} satisfies Meta<typeof Msw>;

type Story = StoryObj<typeof Msw>;

export const Default: Story = {};
