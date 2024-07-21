'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import { ProfilePatchRequest } from '@/src/apis/profile';
import ImageUploader from '@/src/app/users/profile/edit/ImageUploader';
import FormField from '@/src/components/FormField';
import TextInput from '@/src/components/TextInput';
import TopBar from '@/src/components/Topbar';

import { schema } from './formSchema';
import { usePatchUserProfile } from './usePatchUserProfile';

const UserEditPage = () => {
  const { profileImage, nickname } = useGetUserStatusAPI();

  const defaultValues = {
    profileImageUrl: null,
    nickname,
  };

  const formOptions = {
    mode: 'onSubmit',
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  } as const;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm(formOptions);

  const router = useRouter();

  const patchProfile = usePatchUserProfile();

  const onSubmitPost = (data: ProfilePatchRequest) => {
    router.push('/users/profile');
    patchProfile(data);
  };

  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton />
        <TopBar.Title>프로필 수정</TopBar.Title>
        <button
          className='font-title-1-md text-primary'
          type='button'
          onClick={handleSubmit(onSubmitPost)}
        >
          저장
        </button>
      </TopBar.Container>
      <form
        onSubmit={handleSubmit(onSubmitPost)}
        className='flex grow flex-col overflow-y-auto'
      >
        <fieldset className='flex flex-col gap-5'>
          <Controller
            name='profileImageUrl'
            control={control}
            render={({ field }) => (
              <ImageUploader
                onChange={field.onChange}
                imageUrl={profileImage}
              />
            )}
          />
          <FormField labelText='닉네임' error={errors.nickname?.message}>
            <TextInput
              variant={errors.nickname ? 'error' : 'default'}
              placeholder='유저 닉네임'
              maxLength={10}
              {...register('nickname')}
            />
          </FormField>
        </fieldset>
      </form>
    </>
  );
};
export default UserEditPage;
