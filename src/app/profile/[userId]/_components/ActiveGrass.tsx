'use client';

import Tooltip from '@/src/app/_components/Tooltip/Tooltip';

const year = new Date().getFullYear();
const month = new Date().getMonth();
const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
type LightnessType = 100 | 200 | 300 | 400 | 500;

const grass: {
  lightness: LightnessType;
  postNumber: number;
  date: string;
}[] = Array.from({ length: lastDayOfMonth * 3 }, (_, index) => ({
  lightness: 300,
  postNumber: 0,
  date: `${year}-${month + 1}-${index + 1}`,
}));

const ActiveGrass = () => {
  return (
    <div className='border-b p-2'>
      <label>{`총 0개의 포스트를 작성하였습니다.`}</label>
      <div className='mt-3 flex flex-wrap items-center justify-start gap-[2px] rounded-sm bg-[#F9F9F9]'>
        {grass.map(({ date, postNumber, lightness }) => (
          <Tooltip
            key={date}
            direction='bottom'
            message={`${date}, 게시물: ${postNumber}`}
            hasArrow
            type='hover'
          >
            <div
              className={`shadow-border bg-grass-${lightness} h-5 w-5 rounded-md`}
            ></div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default ActiveGrass;
