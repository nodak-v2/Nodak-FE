import { useMutation, useQueryClient } from '@tanstack/react-query';

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
    onSuccess: () => queryClient.removeQueries(),
  });

  return mutateAsync;
};
