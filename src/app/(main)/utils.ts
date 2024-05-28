import { PostList } from '@/src/apis/post';
import { PostType } from '@/src/app/(main)/_component/PostItem';

export const PostContentToPostItemType = (
  postListContent: PostList['body']['content'][0],
): PostType => ({
  title: postListContent.title,
  commentedCount: postListContent.totalCount,
  author: postListContent.author,
  profileImageUrl: postListContent.profileImageUrl,
  imageUrl: postListContent.postImageUrl,
  // TODO: votedCount, likedCount, createdAt 값은 서버에서 받아와야 합니다.
  votedCount: 0,
  likedCount: 0,
  createdAt: new Date().toISOString(),
});

export const isValidImageUrl = (url: string | null): url is string => {
  if (!url) return false;
  if (url.startsWith('data:')) return true;
  if (url.startsWith('http://') || url.startsWith('https://')) return true;

  return false;
};
