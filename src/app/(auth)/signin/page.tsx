import Image from 'next/image';
import Link from 'next/link';

const Signin = () => {
  const SLOGAN = '까다로운 고민에 대한 해답을 pick';

  return (
    <>
      <div className='flex grow flex-col items-center justify-center gap-[16px]'>
        <Image src='/picky/logo.svg' alt='logo' width={160} height={84} />
        <span className='font-h3-sm'>{SLOGAN}</span>
      </div>
      <div className='sticky mb-[60px] h-[44px] min-w-full px-[14px]'>
        <Link href='https://api.nodak.link/oauth2/authorization/kakao'>
          <Image
            src='/picky/kakao.svg'
            alt='kakao'
            fill
            className='opacity-100 hover:opacity-80'
          />
        </Link>
      </div>
    </>
  );
};

export default Signin;
