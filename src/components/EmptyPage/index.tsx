import Link from 'next/link';

import Icon from '../Icon';

interface EmptyPageProps {
  href?: string;
  content?: string;
}

const EmptyPage = ({
  href = '/',
  content = '투표 글 작성하기',
}: EmptyPageProps) => (
  <div className='flex h-full grow flex-col items-center justify-center gap-3'>
    <Icon id='warning' aria-label='투표 글 없음' size={64} />
    <span className='font-h3-bold text-gray-accent3'>
      작성된 투표 글이 없습니다.
    </span>
    <Link
      href={href}
      className='text-h3-sm flex items-center justify-center rounded-[30px] bg-primary px-6 py-3'
    >
      {content}
    </Link>
  </div>
);

export default EmptyPage;
