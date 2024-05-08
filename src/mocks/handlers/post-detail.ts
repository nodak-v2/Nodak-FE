import { HttpResponse, http } from 'msw';

import { PostDetail } from '@/src/apis/types';

const postList = Array.from<unknown, PostDetail>({ length: 10 }, () => ({
  title: '시연영상은 어떤가요?',
  author: '데브코스시연',
  profileImageUrl: 'http://via.placeholder.com/40',
  date: '2024-01-17',
  content: '게시글 시연영상',
  imageUrl: 'http://abc.abc',
  voteInfo: {
    voteId: 123,
    voteTitle: '시연영상 만족도',
    hasVoted: true,
    choice: 1,
    options: ['만족', '불만족'],
  },
  starCount: 2,
  checkStar: true,
}));

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
