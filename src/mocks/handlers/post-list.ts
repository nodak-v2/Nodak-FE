import { HttpResponse, http } from 'msw';

import { PostList } from '@/src/apis/types';

const postList = {
  posts: [
    {
      postId: 1,
      title: 'ㅎㅇ요',
      totalCount: 2,
      userId: 1,
      author: 'eref',
      profileImageUrl: 'https:/abc.abc',
      imageUrl: 'https://abc.abc',
      createdAt: '2024-04-30',
    },
    {
      postId: 2,
      title: 'tt',
      totalCount: 4,
      userId: 1,
      author: 'aa',
      profileImageUrl: 'https:/abc.abc',
      imageUrl: 'https://abc.abc',
      createdAt: '2024-04-30',
    },
    {
      postId: 3,
      title: 'tt',
      totalCount: 4,
      userId: 1,
      author: 'aa',
      profileImageUrl: 'https:/abc.abc',
      imageUrl: 'https://abc.abc',
      createdAt: '2024-04-30',
    },
  ],
  pageable: {
    // 페이지네이션 정보
    sort: {
      sorted: false,
      empty: true,
      unsorted: true,
    },
    offset: 0, // 현재 페이지
    pageNumber: 0, // 현재 페이지의 첫 번째 데이터 인덱스
    pageSize: 10, // 페이지 당 데이터 개수
    unpaged: false, // 페이지네이션 되지 않은 상태인지 ? false 경우, 페이지네이션 적용
    paged: true, // 페이지네이션 적용 여부, true일 경우, 페이지네이션 적용
  },
  last: false, // 마지막 페이지 여부
  totalPages: 0, // 전체 페이지 수
  totalElements: 0, // 총 데이터 개수
  first: true, // 첫 번째 페이지 여부
  size: 10, // 페이지 사이즈
  number: 0, // 현재 페이지
  sort: {
    sorted: false,
    empty: true,
    unsorted: true,
  },
  numberOfElements: 0, // 현재 페이지에 포함된 데이터 개수
  empty: false, // 현재 페이지가 비어있는 지 여부
};

const getPostList = http.get('posts', () => {
  return HttpResponse.json<PostList>(postList);
});
export const handlers = [getPostList];
