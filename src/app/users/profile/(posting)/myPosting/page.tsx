'use client';

import EmptyPage from '@/src/components/EmptyPage';

import PostingList from '../_components/PostingList';

const EMPTY_TEXT = '작성 글이 없습니다.';
const EMPTY_BUTTON_TEXT = '투표 글 작성하기';

const MyPostingHistoryPage = () => (
  <PostingList>
    <EmptyPage
      text={EMPTY_TEXT}
      buttonContent={EMPTY_BUTTON_TEXT}
      href='/createPost'
    />
  </PostingList>
);

export default MyPostingHistoryPage;
