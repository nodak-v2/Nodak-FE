'use client';

import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import ImageUploader from '@/src/app/users/profile/edit/ImageUploader';
import FormField from '@/src/components/FormField';
import TextInput from '@/src/components/TextInput';
import Toast from '@/src/components/Toast';
import TopBar from '@/src/components/Topbar';

import { formOptions } from './formSchema';

const UserEditPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm(formOptions);

  const router = useRouter();

  const onSubmitPost = () => {
    Toast.default('수정되었습니다.');
    router.push('/');
  };

  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='./' />
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
            name='imageUrl'
            control={control}
            render={({ field }) => (
              <ImageUploader
                defaultSrcUrl='/user-profile.png'
                onChange={field.onChange}
              />
            )}
          />

          <FormField labelText='닉네임' error={errors.nickName?.message}>
            <TextInput
              variant={errors.nickName ? 'error' : 'default'}
              placeholder='유저 닉네임'
              maxLength={10}
              {...register('nickName')}
            />
          </FormField>
        </fieldset>
      </form>
    </>
  );
};
export default UserEditPage;
