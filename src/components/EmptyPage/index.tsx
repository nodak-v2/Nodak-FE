import Icon from '../Icon';

const EmptyPage = ({ text }: { text: string }) => (
  <div className='flex h-full grow flex-col items-center justify-center gap-3'>
    <Icon id='warning' aria-label='투표 글 없음' size={64} />
    <span className='font-h3-bold text-gray-accent3'>{text}</span>
  </div>
);

export default EmptyPage;
