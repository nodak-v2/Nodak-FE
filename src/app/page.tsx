import Icon from '../components/Icon';
import Popup from './_components/Popup';

const Home = () => {
  return (
    // 아래는 예시 사용방법입니다.
    <>
      <div className='flex w-full items-center justify-center gap-4 px-4'>
        <Icon id='chat' />
        <Icon id='home' />
        <Icon id='user' />
        <Icon id='add' />
        <Icon id='comment' size={16} />
        <Icon id='heart' size={16} />
      </div>

      <Popup />
    </>
  );
};

export default Home;
