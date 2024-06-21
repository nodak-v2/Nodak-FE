'use client';

import PostingList from '../_components/PostingList';

const NO_COMMENT_TEXT = '작성한 댓글이 없습니다.';

const MyCommentHistoryPage = () => <PostingList text={NO_COMMENT_TEXT} />;
export default MyCommentHistoryPage;
