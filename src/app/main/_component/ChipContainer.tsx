import { useState } from 'react';

import Link from 'next/link';

import Chip from '@/src/app/main/_component/Chip';

const channelData = [
  { name: '전체', path: 'all' },
  { name: 'HOT', path: 'hot' },
  { name: '잡담', path: 'chatting' },
  { name: '스포츠', path: 'sports' },
  { name: '연예', path: 'entertaining' },
  { name: '공부', path: 'study' },
];

interface ChipContainerProps {
  currentChannel: string;
}

const ChipContainer = ({ currentChannel }: ChipContainerProps) => {
  const [currentPath, setCurrentPath] = useState(currentChannel || 'all');

  const handleChipClick = (path: string) => () => {
    setCurrentPath(path);
  };

  return (
    <div className='overflow-x-auto'>
      <ul className='flex flex-nowrap gap-2 p-2'>
        {channelData.map(({ name, path }, index) => {
          const variant = path === currentPath ? 'selected' : 'default';

          return (
            <li key={`${index}-${name}`}>
              <Link
                href={{ pathname: '/main', query: { channel: path } }}
                onClick={handleChipClick(path)}
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
