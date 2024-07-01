import { useLogoutAPI } from '@/src/apis/logout';

export const useLogout = () => {
  const logout = useLogoutAPI();

  return async () => await logout();
};
