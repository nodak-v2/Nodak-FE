import { useMutation } from '@tanstack/react-query';

import { api } from './core';

const logout = () => {
  return api.post({
    url: `/user/logout`,
  });
};

export const useLogoutAPI = () => {
  const { mutateAsync } = useMutation({
    mutationFn: () => logout(),
  });

  return mutateAsync;
};
