'use client';

import Image from 'next/image';

const MissionBadgeDummy = [
  {
    image: 'https://via.placeholder.com/150',
    description: '게시글 3개 작성하기',
  },
  {
    image: 'https://via.placeholder.com/150',
    description: '댓글 3개 작성하기',
  },
  {
    image: 'https://via.placeholder.com/150',
    description: '좋아요 3개 누르기',
  },
  {
    image: 'https://via.placeholder.com/150',
    description: '팔로우 3개 하기',
  },
  {
    image: 'https://via.placeholder.com/150',
    description: '팔로우 3개 하기',
  },
  {
    image: 'https://via.placeholder.com/150',
    description: '팔로우 3개 하기',
  },
  {
    image: 'https://via.placeholder.com/150',
    description: '팔로우 3개 하기',
  },
  {
    image: 'https://via.placeholder.com/150',
    description: '팔로우 3개 하기',
  },
  {
    image: 'https://via.placeholder.com/150',
    description: '팔로우 3개 하기',
  },
];
const MissionBadge = () => {
  return (
    <div className='flex flex-col gap-2 border-b p-4'>
      <div className='flex items-center gap-0.5 text-sm text-[#F0F0F0]'>
        <span>{'미션 뱃지'}</span>
        <span>{MissionBadgeDummy.length}</span>
      </div>
      <div className='flex flex-wrap items-center justify-start gap-3'>
        {MissionBadgeDummy.map((mission, index) => (
          <Image
            key={index}
            src={mission.image}
            alt='미션 이미지'
            width={45}
            height={45}
            className='rounded-full object-cover'
          />
        ))}
      </div>
    </div>
  );
};
export default MissionBadge;
