import { useRouter } from 'next/navigation';

import Icon from '@/src/components/Icon';

import { useLogout } from '../hooks/useLogout';

const Setting = () => {
  const logout = useLogout();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <div className='flex flex-col gap-4 px-4'>
      <span className='font-h4-sm-bold text-gray-accent3'>설정</span>
      <div
        className='flex w-fit cursor-pointer items-center gap-3'
        onClick={handleLogout}
      >
        <Icon id='log-out' size={16} />
        <span className='font-h4-sm-bold'>로그아웃</span>
      </div>
    </div>
  );
};

export default Setting;
