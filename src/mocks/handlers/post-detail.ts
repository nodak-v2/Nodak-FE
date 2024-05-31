import { HttpResponse, http } from 'msw';

import { BASE_URL } from '@/src/apis/constants';
import { PostDetail } from '@/src/apis/post';

class Post {
  private postDetail: PostDetail[];
  private mockPostDetail = (): PostDetail => ({
    message: 'success',
    body: {
      title: '시연영상은 어떤가요?',
      author: '데브코스시연',
      isAuthor: false,
      commentSize: 2,
      profileImageUrl: 'http://via.placeholder.com/40',
      createdAt: '2024-01-17',
      content: '게시글 시연영상',
      imageUrl: 'http://abc.abc',
      starCount: 2,
      checkStar: true,
    },
  });
  constructor() {
    this.postDetail = Array.from<unknown, PostDetail>(
      { length: 10 },
      this.mockPostDetail,
    );

    this.setIsAuthorById(0, true);
    this.setIsAuthorById(1, false);
    this.setIsAuthorById(2, true);
    this.setIsAuthorById(3, false);
  }

  getPostList(): PostDetail[] {
    return this.postDetail;
  }

  setIsAuthorById(postId: number, isAuthor: boolean) {
    this.postDetail[postId].body.isAuthor = isAuthor;
  }

  setStarCountById(postId: number, starCount: number) {
    this.postDetail[postId].body.starCount = starCount;
  }

  setCheckStarById(postId: number, checkStar: boolean) {
    this.postDetail[postId].body.checkStar = checkStar;
  }
}

export const post = new Post();

export const postList = post.getPostList();

const isOutOfBounds = (index: number) => index < 0 || index >= postList.length;

const getPostDetail = http.get(`${BASE_URL}/posts/:postId`, ({ params }) => {
  const { postId } = params;

  if (isOutOfBounds(+postId))
    return new HttpResponse('Not found', {
      status: 404,
    });

  return HttpResponse.json<PostDetail>(postList[+postId]);
});

const createLike = http.post(
  `${BASE_URL}/posts/:postId/stars`,
  ({ params }) => {
    const { postId } = params;

    if (isOutOfBounds(+postId))
      return new HttpResponse('Not found', {
        status: 404,
      });

    post.setStarCountById(+postId, postList[+postId].body.starCount + 1);
    post.setCheckStarById(+postId, true);

    return new HttpResponse('Created', {
      status: 201,
    });
  },
);

const deleteLike = http.delete(
  `${BASE_URL}/posts/:postId/stars`,
  ({ params }) => {
    const { postId } = params;

    if (isOutOfBounds(+postId))
      return new HttpResponse('Not found', {
        status: 404,
      });

    post.setStarCountById(+postId, postList[+postId].body.starCount - 1);
    post.setCheckStarById(+postId, false);

    return new HttpResponse('Created', {
      status: 200,
    });
  },
);

export const handlers = [getPostDetail, createLike, deleteLike];
