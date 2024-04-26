'use client';

import Icon from '../components/Icon';

const Home = () => {
  return (
    // 아래는 예시 사용방법입니다.
    <div className='flex w-full flex-row items-center justify-center gap-4 px-4'>
      <Icon id='chat' />
      <Icon id='home' />
      <Icon id='user' />
      <Icon id='add' />
      <Icon id='comment' size={16} />
      <Icon id='heart' size={16} />
    </div>
  );
};

export default Home;
