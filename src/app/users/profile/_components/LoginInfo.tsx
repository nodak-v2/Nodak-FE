import Link from 'next/link';

import Icon from '@/src/components/Icon';

const LoginInfo = () => {
  return (
    <Link href='/signin'>
      <div className='mt-5 flex justify-between px-4'>
        <div className='flex flex-col gap-1'>
          <span className='font-h3-sm'>로그인 및 회원가입</span>
          <span className='font-text-1-rg text-gray-accent4'>
            로그인 후 까다로운 고민을 해결해 보세요!
          </span>
        </div>
        <Icon id='arrow-right' size={24} />
      </div>
    </Link>
  );
};

export default LoginInfo;
