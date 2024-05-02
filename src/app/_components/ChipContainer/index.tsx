import Link from 'next/link';

import Chip from '@/src/app/_components/Chip';

const channelData = [
  { name: '전체', path: 'all' },
  { name: 'HOT', path: 'hot' },
  { name: '잡담', path: 'chatting' },
  { name: '스포츠', path: 'sports' },
  { name: '연예', path: 'entertaining' },
  { name: '공부', path: 'study' },
];

const currentPath = 'all';

const ChipContainer = () => {
  return (
    <div className='overflow-x-auto'>
      <ul className='flex flex-nowrap gap-2 p-2'>
        {channelData.map(({ name, path }, index) => {
          const variant = path === currentPath ? 'selected' : 'default';

          return (
            <li key={`${index}-${name}`}>
              <Link href={{ pathname: '/', query: { channel: path } }}>
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