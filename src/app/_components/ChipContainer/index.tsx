import Link from 'next/link';

import Chip from '@/src/app/_components/Chip';

type Channel = {
  name: string;
  path: string;
  variant: 'primary' | 'secondary';
};

const ChannelData: Channel[] = [
  { name: '전체', path: 'all', variant: 'secondary' },
  { name: 'HOT', path: 'hot', variant: 'secondary' },
  { name: '잡담', path: 'chatting', variant: 'primary' },
  { name: '스포츠', path: 'sports', variant: 'primary' },
  { name: '연예', path: 'entertaining', variant: 'primary' },
  { name: '공부', path: 'study', variant: 'primary' },
];

const ChipContainer = () => {
  return (
    <div className='overflow-x-auto'>
      <ul className='flex flex-nowrap gap-2 p-2'>
        {ChannelData.map(({ name, path, variant }, index) => (
          <li key={`${index}-${name}`}>
            <Link href={{ pathname: '/', query: { channel: path } }}>
              <Chip variant={variant}>{name}</Chip>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChipContainer;
