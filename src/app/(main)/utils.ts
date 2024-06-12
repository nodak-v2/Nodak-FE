import { GetPostListParams, PostList } from '@/src/apis/postList';
import { CATEGORY_MAP } from '@/src/app/(main)/constants';
import { ChannelType } from '@/src/app/_components/ChipContainer';
import { PostType } from '@/src/app/_components/PostItem';

export const PostContentToPostItemType = (
  postListContent: PostList['content'][0],
): PostType => ({
  title: postListContent.title,
  commentedCount: postListContent.commentCount,
  author: postListContent.author,
  profileImageUrl: postListContent.profileImageUrl,
  imageUrl: postListContent.postImageUrl,
  votedCount: postListContent.voterCount,
  likedCount: postListContent.likeCount,
  createdAt: postListContent.createdAt,
});

export const isValidImageUrl = (url: string | null): url is string => {
  if (!url) return false;
  if (url.startsWith('data:')) return true;
  if (url.startsWith('http://') || url.startsWith('https://')) return true;

  return false;
};
export const searchParamsToGetPostListParams = (
  channel?: ChannelType,
  keyword?: string,
): Omit<GetPostListParams, 'size' | 'page'> => {
  const categoryId = channel && CATEGORY_MAP[channel];

  return {
    categoryId,
    keyword,
  };
};
