'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Popup = () => {
  const [seen, setSeen] = useState<string | null>('');

  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    setSeen(localStorage.getItem('seenPopup'));
  }, [setSeen]);

  const handleSeeAgain = () => {
    if (isChecked) {
      localStorage.setItem('seenPopup', 'true');
    }
    setSeen('true');
  };

  const handleCheckbox = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  if (seen) return null;

  return (
    <div className='absolute bottom-0 z-50 flex w-full flex-col bg-dark-accent2'>
      <Swiper
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className='flex w-full max-w-[400px] flex-col items-center bg-[#212529]'
      >
        {[0, 1, 2, 3, 4].map(idx => (
          <SwiperSlide key={idx}>
            <Image
              src={`/SlideD${idx}.webp`}
              alt={`slide-${idx}`}
              width={400}
              height={220}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex items-center justify-between px-1'>
        <div className='flex'>
          <input
            style={{ zoom: '1.5' }}
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckbox}
          />
          <p className='ml-1 text-gray-accent1'>다시 보지 않기</p>
        </div>
        <button className='h-8 w-8 bg-white' onClick={handleSeeAgain}>
          닫기
        </button>
      </div>
    </div>
  );
};
export default Popup;
