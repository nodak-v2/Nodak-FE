import Image from 'next/image';
import Link from 'next/link';

const Signin = () => {
  return (
    <section className='relative mx-auto flex h-svh flex-col items-center justify-center'>
      <div className='flex grow flex-col justify-center'>
        <Image src={'/Logo.png'} alt='Logo' width={160} height={82} />
      </div>
      <div className='mb-[60px]'>
        <Link href='https://api.nodak.link/oauth2/authorization/kakao'>
          <Image
            src={'/kakao.png'}
            alt='kakao'
            width={300}
            height={30}
            className=' opacity-100 hover:opacity-80'
          />
        </Link>
      </div>
    </section>
  );
};

export default Signin;
