import React from 'react';

import Link from 'next/link';

import Chip from '@/src/app/_components/Chip';

export type ChannelType =
  | 'all'
  | 'daily'
  | 'sports'
  | 'entertaining'
  | 'study'
  | 'travel';

export type ChannelTypeOfKorean =
  | '전체'
  | '일상'
  | '스포츠'
  | '연예'
  | '공부'
  | '여행';

const channelData: { name: ChannelTypeOfKorean; path: ChannelType }[] = [
  { name: '전체', path: 'all' },
  { name: '일상', path: 'daily' },
  { name: '스포츠', path: 'sports' },
  { name: '연예', path: 'entertaining' },
  { name: '공부', path: 'study' },
  { name: '여행', path: 'travel' },
];

interface ChipContainerProps {
  currentChannel?: ChannelType;
  defaultPath?: string;
}

const ChipContainer = ({
  currentChannel = 'all',
  defaultPath = '/',
}: ChipContainerProps) => {
  return (
    <ul className='flex items-center gap-2 overflow-x-auto overflow-y-hidden px-4 py-2'>
      {channelData.map(({ name, path }, index) => {
        const variant = path === currentChannel ? 'selected' : 'default';

        return (
          <li key={`${index}-${name}`}>
            <Link
              href={{
                pathname: defaultPath,
                query: path === 'all' ? {} : { channel: path },
              }}
            >
              <Chip variant={variant}>{name}</Chip>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ChipContainer;
