import Image from 'next/image';

const Introduction = () => (
  <div className='flex flex-col items-center gap-[20px]'>
    <Image
      src='/app-Icon/icon-144x144.png'
      alt='노닥노닥 로고'
      width={48}
      height={48}
    />
    <p className='flex flex-col items-center justify-center'>
      투표를 통한 고민 해결 커뮤니티 picky
    </p>
  </div>
);
export default Introduction;
