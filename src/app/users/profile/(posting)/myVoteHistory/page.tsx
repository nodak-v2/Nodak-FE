'use client';

import PostingList from '../_components/PostingList';

const NO_VOTE_TEXT = '투표한 게시글이 없습니다.';
const MyVoteHistoryPage = () => <PostingList text={NO_VOTE_TEXT} />;
export default MyVoteHistoryPage;
