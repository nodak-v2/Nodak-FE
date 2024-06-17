'use client';

import { forwardRef } from 'react';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useCreatePostAPI } from '@/src/apis/postDetail';
import { formValueToRequestValue } from '@/src/app/(post)/createPost/_component/PostForm/adapter';
import FormField from '@/src/components/FormField';
import Selector from '@/src/components/Selector';
import TextInput from '@/src/components/TextInput';
import Textarea from '@/src/components/Textarea';
import VoteForm from '@/src/components/VoteForm';

import ImageUploader from '../ImageUploader';
import { SchemaType, formOptions } from './formSchema';

const channels = ['전체', 'HOT', '잡담', '스포츠', '연예', '공부'];

const PostForm = forwardRef<HTMLFormElement>((_, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm(formOptions);

  const createPost = useCreatePostAPI();

  const onSubmitPost: SubmitHandler<SchemaType> = data => {
    createPost(formValueToRequestValue(data));
  };

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit(onSubmitPost)}
      className='flex grow flex-col overflow-y-auto py-2'
    >
      <Controller
        name='imageUrl'
        control={control}
        render={({ field }) => <ImageUploader onChange={field.onChange} />}
      />

      <fieldset className='flex flex-col gap-5'>
        <FormField
          labelText='제목'
          isRequired
          maxLength={50}
          currentLength={watch('title')?.trim().length}
          error={errors.title?.message}
        >
          <TextInput
            variant={errors.title ? 'error' : 'default'}
            maxLength={50}
            placeholder='투표 제목'
            {...register('title')}
          />
        </FormField>

        <FormField
          labelText='내용'
          isRequired
          maxLength={500}
          currentLength={watch('content')?.trim().length}
          error={errors.content?.message}
        >
          <Textarea
            variant={errors.content ? 'error' : 'default'}
            maxLength={500}
            placeholder='내용을 입력하세요'
            {...register('content')}
          />
        </FormField>

        <FormField
          labelText='투표 항목'
          isRequired
          description='최대 6개의 투표항목을 입력할 수 있습니다.'
          className='px-0'
          labelClassName='px-4'
          childClassName='px-0'
        >
          <Controller
            name='voteOptions'
            control={control}
            render={({ field }) => (
              <VoteForm
                onChange={field.onChange}
                error={errors.voteOptions?.message}
              />
            )}
          />
        </FormField>

        <FormField
          labelText='카테고리'
          isRequired
          error={errors.channel?.message}
        >
          <Controller
            name='channel'
            control={control}
            render={({ field }) => (
              <Selector
                items={channels}
                placeholder='채널 선택'
                onChange={field.onChange}
                variant={errors.channel ? 'error' : 'default'}
              />
            )}
          />
        </FormField>
      </fieldset>
    </form>
  );
});

PostForm.displayName = 'PostForm';

export default PostForm;
