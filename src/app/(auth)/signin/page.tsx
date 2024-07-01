import Image from 'next/image';
import Link from 'next/link';

const Signin = () => {
  return (
    <section className='relative flex h-svh flex-col items-center justify-center'>
      <div className='flex grow flex-col items-center justify-center gap-[16px]'>
        <Image src='/picky/logo.svg' alt='logo' width={160} height={84} />
        <span className='font-h3-sm'>까다로운 고민에 대한 해답을 pick</span>
      </div>
      <div className='mb-[60px] w-full px-[14px]'>
        <Link href='https://api.nodak.link/oauth2/authorization/kakao'>
          <Image
            src='/picky/kakao.svg'
            alt='kakao'
            width={0}
            height={0}
            sizes='100vw'
            style={{ height: 'auto', width: '100%' }}
            className=' opacity-100 hover:opacity-80'
          />
        </Link>
      </div>
    </section>
  );
};

export default Signin;
