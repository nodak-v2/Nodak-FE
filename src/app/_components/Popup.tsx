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
      className='flex max-w-[350px] flex-col bg-[#212529]'
    >
      {[0, 1, 2, 3, 4].map(idx => (
        <SwiperSlide key={idx}>
          <Image
            src={`/SlideD${idx}.webp`}
            alt={'slide'}
            width={350}
            height={220}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Popup;
