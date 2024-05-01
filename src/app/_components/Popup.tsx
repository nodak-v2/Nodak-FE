'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Popup = () => {
  return (
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
            className=''
            src={`/SlideD${idx}.webp`}
            alt={'slide'}
            width={400}
            height={220}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Popup;
