import Link from 'next/link';

import Chip from '@/src/app/_components/Chip';

export type ChannelType =
  | 'all'
  | 'chatting'
  | 'sports'
  | 'entertaining'
  | 'study';

const channelData: { name: string; path: ChannelType }[] = [
  { name: '전체', path: 'all' },
  { name: '잡담', path: 'chatting' },
  { name: '스포츠', path: 'sports' },
  { name: '연예', path: 'entertaining' },
  { name: '공부', path: 'study' },
];

interface ChipContainerProps {
  currentChannel?: ChannelType;
}

const ChipContainer = ({ currentChannel = 'all' }: ChipContainerProps) => {
  return (
    <div className='bg-dark-accent2 sticky top-0 overflow-x-auto'>
      <ul className='flex flex-nowrap gap-2 px-4 py-2'>
        {channelData.map(({ name, path }, index) => {
          const variant = path === currentChannel ? 'selected' : 'default';

          return (
            <li key={`${index}-${name}`}>
              <Link
                href={{
                  pathname: '/',
                  query: path === 'all' ? {} : { channel: path },
                }}
              >
                <Chip variant={variant}>{name}</Chip>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChipContainer;
