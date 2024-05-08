import { HttpResponse, http } from 'msw';

import { PostDetail } from '@/src/apis/types';

const postList = Array.from<unknown, PostDetail>({ length: 10 }, () => ({
  title: '시연영상은 어떤가요?',
  author: '데브코스시연',
  isAuthor: false,
  profileImageUrl: 'http://via.placeholder.com/40',
  date: '2024-01-17',
  content: '게시글 시연영상',
  imageUrl: 'http://abc.abc',
  voteInfo: {
    voteId: 123,
    voteTitle: '시연영상 만족도',
    hasVoted: false,
    choice: 1,
    options: ['만족', '불만족'],
  },
  starCount: 2,
  checkStar: true,
}));

export const VOTED_AUTHOR = 0;
export const VOTED_NOT_AUTHOR = 1;
export const NOT_VOTED_AUTHOR = 2;
export const NOT_VOTED_NOT_AUTHOR = 3;

postList[VOTED_AUTHOR].voteInfo.hasVoted = true;
postList[VOTED_AUTHOR].isAuthor = true;

postList[VOTED_NOT_AUTHOR].voteInfo.hasVoted = true;
postList[VOTED_NOT_AUTHOR].isAuthor = false;

postList[NOT_VOTED_AUTHOR].voteInfo.hasVoted = false;
postList[NOT_VOTED_AUTHOR].isAuthor = true;

postList[NOT_VOTED_NOT_AUTHOR].voteInfo.hasVoted = false;
postList[NOT_VOTED_NOT_AUTHOR].isAuthor = false;

const getPostDetail = http.get(
  `${process.env.NEXT_PUBLIC_URL}/posts/:id`,
  ({ params }) => {
    const { id } = params;
    const index = +id;
    const isInCorrectId = index < 0 || postList.length <= index;

    if (isInCorrectId)
      return new HttpResponse('Not found', {
        status: 404,
      });

    return HttpResponse.json<PostDetail>(postList[index]);
  },
);

export const handlers = [getPostDetail];
