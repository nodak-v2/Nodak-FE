import { PropsWithChildren } from 'react';

import Icon from '@/src/components/Icon';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex justify-between border-b border-gray-accent2 p-2'>
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

const BackButton = () => (
  <Icon id='back' size={24} className='cursor-pointer' />
);

const ReportButton = () => (
  <Icon id='notification' size={24} className='text-red-500' />
);

const DarkModeButton = () => <Icon id='moon-fill' size={24} />;

const SearchButton = () => <Icon id='search' size={24} />;

const NotificationButton = () => <Icon id='notification' size={24} />;

const Title = ({ children }: PropsWithChildren) => (
  <div className='cursor-default font-bold'>{children}</div>
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
