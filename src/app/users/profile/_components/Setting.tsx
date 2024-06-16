import Icon from '@/src/components/Icon';

const Setting = () => {
  return (
    <div className='flex flex-col gap-4 px-4'>
      <span className='text-gray-accent3 font-h4-sm-bold'>설정</span>
      <div className='flex items-center gap-3'>
        <Icon id='log-out' size={16} />
        <span className='font-h4-sm-bold'>로그아웃</span>
      </div>
    </div>
  );
};

export default Setting;
