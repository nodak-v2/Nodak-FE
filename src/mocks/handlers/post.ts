import { HttpResponse, http } from 'msw';

interface Post {
  postId: string;
  nickname: string;
  title: string;
  createAt: string;
  viewCount: number;
  likeCount: number;
  hashtags: string[];
}

const getPostList = http.get(`posts`, () => {
  return HttpResponse.json<Post[]>([
    {
      postId: '1',
      nickname: 'testAccount',
      title: '제목일세',
      createAt: '2024-03-01T18:55:48.884Z',
      viewCount: 30,
      likeCount: 1,
      hashtags: ['#해시태그'],
    },
  ]);
});

export const handlers = [getPostList];
