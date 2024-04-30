import Image from 'next/image';

const Introduction = () => (
  <div className='flex flex-col items-center'>
    <Image src='/노닥노닥.png' alt='노닥노닥 로고' width={300} height={200} />
    <p className='text-center'>{'함께하는 투표플랫폼 ! 노닥노닥 입니다.'}</p>
  </div>
);
export default Introduction;
