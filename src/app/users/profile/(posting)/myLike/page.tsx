'use client';

import PostingList from '../_components/PostingList';

const NO_LIKE_TEXT = '좋아요한 게시글이 없습니다.';
const MyLikeHistoryPage = () => <PostingList text={NO_LIKE_TEXT} />;

export default MyLikeHistoryPage;
