import Icon from '@/src/components/Icon';

const GNB = () => {
  const navItems = [
    { href: '/', icon: <Icon id='home' />, subText: '홈' },
    { href: '/chat', icon: <Icon id='chat' />, subText: '채팅' },
    { href: '/write', icon: <Icon id='add' />, subText: '글쓰기' },
    { href: '/noti', icon: <Icon id='heart' />, subText: '알림' },
    { href: '/profile', icon: <Icon id='user' />, subText: '프로필' },
  ];

  return (
    <div className='w-full'>
      <div className='bg-[#212529]'>
        <div className='flex justify-between px-4'>
          {navItems.map(({ href, icon, subText }, index) => (
            <div key={index}>
              <a
                href={href}
                className='mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-white'
              >
                <span className='flex flex-col items-center'>
                  <span className='mx-auto mb-1 block pt-1 text-2xl '>
                    {icon}
                  </span>
                  <span className='block pb-2 text-xs'>{subText}</span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GNB;
