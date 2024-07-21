'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

const GNB = () => {
  const currentPage = usePathname();

  const navItems = [
    {
      href: '/',
      icon: <Icon id='home' />,
      name: '홈',
    },
    { href: '/chat', icon: <Icon id='chat' />, name: '채팅' },
    {
      href: '/createPost',
      icon: <Icon id='add-box' />,
      name: '글쓰기',
    },
    {
      href: `/notification`,
      icon: <Icon id='notification' />,
      name: '알림',
    },
    { href: '/users/profile', icon: <Icon id='user' />, name: '마이페이지' },
  ];

  return (
    <div className='sticky bottom-0 w-full bg-background px-4'>
      <nav>
        <ul className='flex justify-between'>
          {navItems.map(({ href, icon, name }, index) => {
            const isActive = currentPage === href;

            return (
              <li key={`${index}-${name}`}>
                <Link
                  href={href}
                  className='mx-auto flex w-full items-end justify-center px-4 pt-1 text-center'
                >
                  <div
                    className={cn(
                      'flex flex-col items-center gap-[6px]',
                      isActive ? 'text-white' : 'text-gray-accent3',
                    )}
                  >
                    {icon}
                    <span className='pb-4 text-xs'>{name}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default GNB;
