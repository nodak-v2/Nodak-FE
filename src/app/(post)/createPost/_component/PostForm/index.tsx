'use client';

import { Controller, useForm } from 'react-hook-form';

import { PostValue, createPost } from '@/src/apis/post';
import Button from '@/src/components/Button/Button';
import FormField from '@/src/components/FormField';
import Selector from '@/src/components/Selector';
import TextInput from '@/src/components/TextInput';
import Textarea from '@/src/components/Textarea';
import VoteForm from '@/src/components/VoteForm';

import ImageUploader from '../ImageUploader';
import { formOptions } from './formSchema';

const channels = ['전체', 'HOT', '잡담', '스포츠', '연예', '공부'];

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm(formOptions);

  const onSubmitPost = (data: PostValue) => {
    createPost(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitPost)}
      className='flex grow flex-col overflow-y-auto'
    >
      <Controller
        name='imageUrl'
        control={control}
        render={({ field }) => <ImageUploader onChange={field.onChange} />}
      />

      <fieldset className='flex flex-col gap-5 p-6'>
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
            {...register('title')}
          />
        </FormField>

        <FormField
          labelText='투표 설명'
          isRequired
          maxLength={500}
          currentLength={watch('content')?.trim().length}
          error={errors.content?.message}
        >
          <Textarea
            variant={errors.content ? 'error' : 'default'}
            maxLength={500}
            {...register('content')}
          />
        </FormField>

        <FormField
          labelText='투표 항목'
          isRequired
          description='최대 6개의 투표항목을 입력할 수 있습니다.'
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
          labelText='채널 선택'
          isRequired
          error={errors.channel?.message}
          childClassName={errors.channel ? 'ring-1 ring-red-500 rounded' : ''}
        >
          <Controller
            name='channel'
            control={control}
            render={({ field }) => (
              <Selector
                items={channels}
                placeholder='채널 선택'
                onChange={field.onChange}
              />
            )}
          />
        </FormField>
      </fieldset>
      <Button type='submit' baseColor='primary' className='mx-4 my-6'>
        투표 생성하기
      </Button>
    </form>
  );
};

export default PostForm;
