'use client';

import EmptyPage from '@/src/components/EmptyPage';

import PostingList from '../_components/PostingList';

const EMPTY_TEXT = '내 댓글이 없습니다.';
const EMPTY_BUTTON_TEXT = '투표 둘러보기';

const MyCommentHistoryPage = () => (
  <PostingList>
    <EmptyPage text={EMPTY_TEXT} buttonContent={EMPTY_BUTTON_TEXT} />
  </PostingList>
);
export default MyCommentHistoryPage;
