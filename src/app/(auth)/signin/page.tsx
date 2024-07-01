import Image from 'next/image';
import Link from 'next/link';

import Icon from '@/src/components/Icon';

const Signin = () => {
  return (
    <section className='relative mx-auto flex h-svh flex-col items-center justify-center'>
      <div className='flex grow flex-col justify-center'>
        <Icon id='logo-lg' width='160' height='84' />
      </div>
      <div className='mb-[60px]'>
        <Link href='https://api.nodak.link/oauth2/authorization/kakao'>
          <Image
            src='/picky/kakao.png'
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
