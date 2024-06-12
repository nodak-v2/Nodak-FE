'use client';

import { cva } from 'class-variance-authority';

import Tooltip from '@/src/components/Tooltip/Tooltip';
import { cn } from '@/src/utils/cn';

const year = new Date().getFullYear();
const month = new Date().getMonth();
const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
type LightnessType = 100 | 200 | 300 | 400 | 500;

const grass: {
  lightness: LightnessType;
  postNumber: number;
  date: string;
}[] = Array.from({ length: lastDayOfMonth }, (_, index) => ({
  lightness: 200,
  postNumber: 0,
  date: `${year}-${month + 1}-${index + 1}`,
}));

const grassCSS = cva(`shadow-border h-5 w-5 rounded-md`, {
  variants: {
    variant: {
      100: 'bg-grass-100',
      200: 'bg-grass-200',
      300: 'bg-grass-300',
      400: 'bg-grass-400',
      500: 'bg-grass-500',
    },
  },
  defaultVariants: {
    variant: 100,
  },
});

// Todo : 해당 컴포넌트 로직에 대한 백엔드 API 기반으로 재설계 진행
// Todo : 해당 컴포넌트에 대한 정보를 전달할 수 있는 라벨을 추가해야함. 라벨은 서비스 내의 고유한 아이디어로 구성
const ActiveGrass = () => {
  return (
    <div className='border-b p-4'>
      <div className='mt-3 flex flex-wrap items-center justify-start gap-[2px] rounded-sm bg-[#F9F9F9]'>
        {grass.map(({ date, postNumber, lightness }) => (
          // Todo : 툴팁 컴포넌트 수정 필요
          <Tooltip
            key={date}
            direction='bottom'
            message={`${date}, 게시물: ${postNumber}`}
            hasArrow
            type='hover'
          >
            <div className={cn(grassCSS({ variant: lightness }))}></div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default ActiveGrass;
