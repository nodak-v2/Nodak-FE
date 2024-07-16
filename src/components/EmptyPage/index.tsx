import Link from 'next/link';

import Icon from '../Icon';

interface EmptyPageProps {
  href?: string;
  text: string;
  buttonContent?: string;
}

const EmptyPage = ({
  href = '/',
  text,
  buttonContent = '투표 글 작성하기',
}: EmptyPageProps) => (
  <div className='flex h-full grow flex-col items-center justify-center gap-3'>
    <Icon id='warning' aria-label='투표 글 없음' size={64} />
    <span className='font-h3-bold mb-[28px] text-gray-accent3'>{text}</span>
    <Link
      href={href}
      className='text-h3-sm mt-[28px] flex items-center justify-center rounded-[30px] bg-primary px-6 py-3'
    >
      {buttonContent}
    </Link>
  </div>
);

export default EmptyPage;
