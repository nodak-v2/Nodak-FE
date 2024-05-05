import Image from 'next/image';

const Signin = () => {
  return (
    <section className='mx-auto flex h-svh flex-col items-center justify-center gap-3'>
      <Image
        className='mb-4'
        src={'/노닥노닥.png'}
        alt='kakao'
        width={180}
        height={180}
      />
      <button className='h-50pxr w-240pxr flex items-center justify-center gap-6 rounded-md bg-[#fdd801] px-6 py-3 opacity-70 hover:opacity-100'>
        <Image src={'kakao.svg'} alt='kakao' width={30} height={30} />
        <span>카카오로 시작하기</span>
      </button>
    </section>
  );
};

export default Signin;
