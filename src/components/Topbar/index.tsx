import { PropsWithChildren } from 'react';

import Link from 'next/link';

import Icon from '@/src/components/Icon';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex h-[54px] items-center justify-between p-2 pr-4'>
      {children}
    </div>
  );
};
const Left = ({ children }: PropsWithChildren) => (
  <div className='flex items-center gap-3'>{children}</div>
);

const Right = ({ children }: PropsWithChildren) => (
  <div className='flex items-center gap-3'>{children}</div>
);

const BackButton = ({ href }: { href: string }) => (
  <Link href={href}>
    <Icon id='back' size={24} className='cursor-pointer' />
  </Link>
);

const ReportButton = () => (
  <Icon id='notification' size={24} className='text-red-500' />
);

const DarkModeButton = () => <Icon id='moon-fill' size={24} />;

const SearchButton = () => <Icon id='search' size={24} />;

const NotificationButton = () => <Icon id='notification' size={24} />;

const Title = ({ children }: PropsWithChildren) => (
  <div className='font-h3-sm cursor-default text-white '>{children}</div>
);
const TopBar = {
  Container,
  Left,
  Right,
  BackButton,
  ReportButton,
  DarkModeButton,
  SearchButton,
  NotificationButton,
  Title,
};

export default TopBar;
