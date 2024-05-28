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
      <Link
        href='https://api.nodak.link.com/oauth2/authorization/kakao'
        className='h-50pxr w-240pxr flex items-center justify-center gap-6 rounded-md bg-[#fdd801] px-6 py-3 opacity-100 hover:opacity-80'
      >
        <Image src={'kakao.svg'} alt='kakao' width={30} height={30} />
        <span>카카오로 시작하기</span>
      </Link>
    </section>
  );
};

export default Signin;
