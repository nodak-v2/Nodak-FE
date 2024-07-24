import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import Toast from '@/src/components/Toast';

import { ChannelTypeOfKorean } from '../app/(post)/result/[postId]/_components/Posting/PostingButton';
import { api } from './core';

interface PostDetailBody {
  author: string;
  authorId: number;
  isAuthor: boolean;
  commentSize: number;
  profileImageUrl: string | null;
  createdAt: string;
  content: string;
  starCount: number;
  checkStar: boolean;
  categoryName: ChannelTypeOfKorean;
}

const getPostDetail = (postId: string) => {
  return api.get<PostDetailBody>({
    url: `/posts/${postId}`,
  });
};

export const useGetPostDetailAPI = (postId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['posts', postId],
    queryFn: () => getPostDetail(postId),
  });

  return data.body;
};

const deletePostDetail = (postId: string) => {
  return api.delete({
    url: `/posts/${postId}`,
  });
};

export const useDeletePostDetailAPI = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deletePostDetail(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postList'] });
      queryClient.invalidateQueries({ queryKey: ['posts', postId] });
      Toast.default('게시글이 삭제되었습니다.');
    },
    onError: () => {
      Toast.default('게시글 삭제에 실패했습니다.');
    },
  });
};
