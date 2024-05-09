import { HttpResponse, http } from 'msw';

import { BASE_URL } from '@/src/apis/constants';
import { PostDetail } from '@/src/apis/post';

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

const isOutOfBounds = (index: number) => index < 0 || index >= postList.length;

const getPostDetail = http.get(`${BASE_URL}/posts/:postId`, ({ params }) => {
  const { postId } = params;

  if (isOutOfBounds(+postId))
    return new HttpResponse('Not found', {
      status: 404,
    });

  return HttpResponse.json<PostDetail>(postList[+postId]);
});

const createStar = http.post(
  `${BASE_URL}/posts/:postId/stars`,
  ({ params }) => {
    const { postId } = params;

    if (isOutOfBounds(+postId))
      return new HttpResponse('Not found', {
        status: 404,
      });

    postList[+postId].starCount += 1;
    postList[+postId].checkStar = true;

    return new HttpResponse('Created', {
      status: 201,
    });
  },
);

const deleteStar = http.delete(
  `${BASE_URL}/posts/:postId/stars`,
  ({ params }) => {
    const { postId } = params;

    if (isOutOfBounds(+postId))
      return new HttpResponse('Not found', {
        status: 404,
      });

    postList[+postId].starCount -= 1;
    postList[+postId].checkStar = false;

    return new HttpResponse('Created', {
      status: 200,
    });
  },
);

export const handlers = [getPostDetail, createStar, deleteStar];
