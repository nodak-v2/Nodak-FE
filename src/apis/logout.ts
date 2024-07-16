import { useMutation, useQueryClient } from '@tanstack/react-query';

import Toast from '@/src/components/Toast';

import { api } from './core';

const logout = () => {
  return api.post({
    url: `/user/logout`,
  });
};

export const useLogoutAPI = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.removeQueries();
      Toast.default('로그아웃 되었습니다.');
    },
    onError: () => {
      Toast.default('로그아웃에 실패했습니다.');
    },
  });

  return mutateAsync;
};
