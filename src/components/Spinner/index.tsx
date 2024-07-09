import { FadeLoader } from 'react-spinners';

const Spinner = ({ text }: { text: string }) => (
  <div className='flex h-full w-full flex-col items-center justify-center gap-[40px]'>
    <FadeLoader color='#ffffff' />
    <span className='font-h3-sm text-white'>{text}</span>
  </div>
);

export default Spinner;
