'use client';

import { useEffect, useState } from 'react';

import Icon from '../components/Icon';
import Popup from './_components/Popup';

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [see, setSee] = useState<string | null>('');

  useEffect(() => {
    setSee(localStorage.getItem('see'));
  }, []);

  const handleSeeAgain = () => {
    if (isChecked) {
      localStorage.setItem('see', 'true');
    }
    setSee('true');
  };

  const handleCheckbox = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  return (
    // 아래는 예시 사용방법입니다.
    <>
      <div className='flex w-full items-center justify-center gap-4 px-4'>
        <Icon id='chat' />
        <Icon id='home' />
        <Icon id='user' />
        <Icon id='add' />
        <Icon id='comment' size={16} />
        <Icon id='heart' size={16} />
      </div>
      {!see && (
        <div className='absolute bottom-0 z-50 flex w-full flex-col bg-slate-800'>
          <Popup />
          <div className='flex items-center justify-between'>
            <div className='flex'>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={handleCheckbox}
              />
              <p className='text-white'>다시 보지 않기</p>
            </div>
            <button className='h-8 w-8 bg-white' onClick={handleSeeAgain}>
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
