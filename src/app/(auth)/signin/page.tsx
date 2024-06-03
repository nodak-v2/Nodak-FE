import Image from 'next/image';
import Link from 'next/link';

const Signin = () => {
  return (
    <section className='mx-auto flex h-svh flex-col items-center justify-center gap-3'>
      <Image
        className='mb-4'
        src='/노닥노닥.png'
        alt='kakao'
        width={180}
        height={180}
      />
      <Link href='https://api.nodak.link/oauth2/authorization/kakao'>
        <Image
          src={'/kakao.png'}
          alt='kakao'
          width={300}
          height={30}
          className='opacity-100 hover:opacity-80'
        />
      </Link>
    </section>
  );
};

export default Signin;
