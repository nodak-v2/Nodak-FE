const GNB = () => {
  const navItems = [
    { href: '/', text: 'Home', subText: '홈' },
    { href: '/chat', text: 'Chat', subText: '채팅' },
    { href: '/write', text: 'Write', subText: '글쓰기' },
    { href: '/noti', text: 'Noti', subText: '알림' },
    { href: '/profile', text: 'Profile', subText: '프로필' },
  ];

  return (
    <div className='w-full'>
      <div className='bg-[#212529]'>
        <div className='flex justify-between px-4'>
          {navItems.map((item, index) => (
            <div key={index}>
              <a href={item.href} className='flex p-2 text-center text-white'>
                <span>
                  <p>{item.text}</p>
                  <span className='block pb-2 text-xs'>{item.subText}</span>
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
