import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { api } from './core';

interface PostDetailBody {
  author: string;
  isAuthor: boolean;
  commentSize: number;
  profileImageUrl: string | null;
  createdAt: string;
  content: string;
  starCount: number;
  checkStar: boolean;
  categoryName: string;
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
  const router = useRouter();

  return useMutation({
    mutationFn: () => deletePostDetail(postId),
    onMutate: async () => {
      router.push('/');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['postList'] });
      queryClient.invalidateQueries({ queryKey: ['posts', postId] });
    },
  });
};
