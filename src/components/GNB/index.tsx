'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

// const userId = 1;
const GNB = () => {
  const currentPage = usePathname();

  const navItems = [
    { href: '/', icon: <Icon id='home' />, name: '홈' },
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
    { href: '/users/profile', icon: <Icon id='user' />, name: '프로필' },
  ];

  return (
    <div className='sticky bottom-0 w-full bg-[#212529] px-4'>
      <nav>
        <ul className='flex justify-between'>
          {navItems.map(({ href, icon, name }, index) => {
            const isActive = currentPage === href;

            return (
              <li key={`${index}-${name}`}>
                <Link
                  href={href}
                  className={cn(
                    `mx-auto flex w-full items-end justify-center px-4 pt-1 text-center text-white`,
                    isActive ? 'text-white' : 'text-gray-500',
                  )}
                >
                  <div className='flex flex-col items-center'>
                    <span className='mx-auto mb-1 block pt-1 text-2xl '>
                      {icon}
                    </span>
                    <span className='block pb-2 text-xs'>{name}</span>
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
