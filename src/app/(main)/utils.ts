import { GetPostListParams } from '@/src/apis/postList';
import { CATEGORY_MAP } from '@/src/app/(main)/constants';
import { ChannelType } from '@/src/app/_components/ChipContainer';

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
