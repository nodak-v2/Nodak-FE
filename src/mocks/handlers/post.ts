import { HttpResponse, http } from 'msw';

const getPostList = http.get(`${process.env.NEXT_PUBLIC_URL}/posts`, () => {
  return HttpResponse.json({
    content: [
      {
        postId: '1',
        nickname: 'testAccount',
        title: '제목일세',
        createAt: '2024-03-01T18:55:48.884Z',
        viewCount: 30,
        likeCount: 1,
        hashtags: ['#해시태그'],
      },
    ],
  });
});

export const handlers = [getPostList];
