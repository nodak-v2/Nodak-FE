import { HttpResponse, http } from 'msw';

import { PostDetail } from '@/src/apis/post';

class Post {
  private postList: PostDetail[];

  constructor() {
    this.postList = Array.from<unknown, PostDetail>(
      { length: 10 },
      (_, index) => ({
        title: '시연영상은 어떤가요?',
        author: '데브코스시연',
        isAuthor: false,
        profileImageUrl: 'http://via.placeholder.com/40',
        date: '2024-01-17',
        content: '게시글 시연영상',
        imageUrl: 'http://abc.abc',
        voteInfo: {
          voteId: 123 + index,
          voteTitle: '시연영상 만족도',
          hasVoted: false,
          choice: 1,
          options: ['만족', '불만족'],
        },
        starCount: 2,
        checkStar: true,
        commentCount: 2,
      }),
    );
  }

  getPostList(): PostDetail[] {
    return this.postList;
  }

  setVoteInfo(
    voteId: number,
    callback: (voteInfo: PostDetail['voteInfo']) => void,
  ) {
    const post = this.getPostOfVoteId(voteId);
    if (!post) return;
    callback(post.voteInfo);
  }
  getPostOfVoteId(voteId: number) {
    return this.postList.find(post => post.voteInfo.voteId === voteId);
  }
}

export const post = new Post();

export const postList = post.getPostList();

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
    const isInCorrectId = index < 0 || post.getPostList().length <= index;

    if (isInCorrectId)
      return new HttpResponse('Not found', {
        status: 404,
      });

    return HttpResponse.json<PostDetail>(post.getPostList()[index]);
  },
);

export const handlers = [getPostDetail];
