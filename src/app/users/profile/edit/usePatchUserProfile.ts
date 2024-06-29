import {
  ProfilePatchRequest,
  usePatchUserProfileAPI,
} from '@/src/apis/profile';

export const usePatchUserProfile = () => {
  const patchUserProfile = usePatchUserProfileAPI();

  return async (data: ProfilePatchRequest) => await patchUserProfile(data);
};
