import { usePathname } from 'next/navigation';

import { useGetPostingAPI } from '@/src/apis/posting';

import { PostingNavigation } from '../layout';

const useGetPostHistory = () => {
  const pathname = usePathname().split('/').pop() as PostingNavigation;

  const { content: posts } = useGetPostingAPI({ page: 0, size: 10 }, pathname);

  return posts;
};

export default useGetPostHistory;
