interface Vote {
  voteId: number;
  voteTitle: string;
  hasVoted: boolean;
  choice: number;
  options: string[];
}

export interface PostDetail {
  title: string;
  author: string;
  isAuthor: boolean;
  profileImageUrl: string;
  date: string;
  content: string;
  imageUrl: string;
  voteInfo: Vote;
  starCount: number;
  checkStar: boolean;
  commentCount: number;
}

interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}
interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}
interface PostListInfo {
  postId: number;
  title: string;
  totalCount: number;
  userId: number;
  author: string;
  profileImageUrl: string;
  imageUrl: string;
  createdAt: string;
}

export interface PostList {
  posts: PostListInfo[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
}

export const getPostDetail = async (postId: string) => {
  const data = (
    await fetch(`${process.env.NEXT_PUBLIC_URL}/posts/${postId}`, {
      next: { tags: ['post', postId] },
    })
  ).json() as Promise<PostDetail>;

  return data;
};
