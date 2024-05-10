import Link from 'next/link';

import Icon from '@/src/components/Icon';

const GNB = () => {
  const navItems = [
    { href: '/', icon: <Icon id='home' />, name: '홈' },
    { href: '/chat', icon: <Icon id='chat' />, name: '채팅' },
    { href: '/users', icon: <Icon id='user' />, name: '유저' },
    { href: '/profile', icon: <Icon id='user' />, name: '프로필' },
  ];

  return (
    <nav className='absolute bottom-0 w-full bg-[#212529]  px-4'>
      <ul className='flex justify-between'>
        {navItems.map(({ href, icon, name }, index) => (
          <li key={`${index}-${name}`}>
            <Link
              href={href}
              className='mx-auto flex w-full items-end justify-center px-4 pt-1 text-center text-white'
            >
              <div className='flex flex-col items-center'>
                <span className='mx-auto mb-1 block pt-1 text-2xl '>
                  {icon}
                </span>
                <span className='block pb-2 text-xs'>{name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GNB;
