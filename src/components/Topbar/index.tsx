import { PropsWithChildren } from 'react';

import Link from 'next/link';

import Icon from '@/src/components/Icon';
import MoreMenu from '@/src/components/MoreMenu';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='mb-[16px] flex h-[54px] items-center justify-between px-4 pt-[6px]'>
      {children}
    </div>
  );
};

const NavMore = ({ children }: PropsWithChildren) => (
  <MoreMenu Icon={<Icon id='nav-more' size={24} className='cursor-pointer' />}>
    {children}
  </MoreMenu>
);

NavMore.Item = MoreMenu.Item;

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
