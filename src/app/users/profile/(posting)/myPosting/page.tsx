'use client';

import PostingList from '../_components/PostingList';

const NO_POSTING_TEXT = '작성한 게시글이 없습니다.';
const MyPostingHistoryPage = () => (
  <PostingList text={NO_POSTING_TEXT} isNickname={false} />
);

export default MyPostingHistoryPage;
