import { PropsWithChildren } from 'react';

import Link from 'next/link';

import Icon from '@/src/components/Icon';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex h-[54px] items-center justify-between px-4 pt-[6px]'>
      {children}
    </div>
  );
};

const NavMore = () => (
  <Icon id='nav-more' size={24} className='cursor-pointer' />
);

const BackButton = ({ href }: { href: string }) => (
  <Link href={href}>
    <Icon id='arrow-left' size={24} className='cursor-pointer' />
  </Link>
);

const Title = ({ children }: PropsWithChildren) => (
  <div className='flex grow cursor-default justify-center font-bold'>
    <span>{children}</span>
  </div>
);

const TopBar = {
  Container,
  BackButton,
  Title,
  NavMore,
};

export default TopBar;
