'use client';

import { useEffect, useState } from 'react';

import Icon from '../components/Icon';
import Popup from './_components/Popup';

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [see, setSee] = useState<string | null>('');

  useEffect(() => {
    setSee(sessionStorage.getItem('see'));
  }, []);

  const handleSeeAgain = () => {
    if (isChecked) {
      sessionStorage.setItem('see', 'true');
    }
    setSee('true');
  };

  const handleCheckbox = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  return (
    // 아래는 예시 사용방법입니다.
    <div className='relative'>
      <div className='flex w-full flex-row items-center justify-center gap-4 px-4'>
        <Icon id='chat' />
        <Icon id='home' />
        <Icon id='user' />
        <Icon id='add' />
        <Icon id='comment' size={16} />
        <Icon id='heart' size={16} />
      </div>
      {!see && (
        <div className='absolute flex max-w-[350px] flex-col bg-slate-800'>
          <Popup />
          <div className='flex justify-between'>
            <div className='flex'>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={() => handleCheckbox()}
              />
              <p className='text-white'>다시 보지 않기</p>
            </div>
            <button className='bg-white' onClick={handleSeeAgain}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
