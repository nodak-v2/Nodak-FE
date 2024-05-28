'use client';

import { Controller, useForm } from 'react-hook-form';

import { PostValue, createPost } from '@/src/apis/post';
import Button from '@/src/app/_components/Button/Button';
import FormField from '@/src/app/_components/FormField';
import Selector from '@/src/app/_components/Selector';
import TextInput from '@/src/app/_components/TextInput';
import Textarea from '@/src/app/_components/Textarea';
import VoteForm from '@/src/app/_components/VoteForm';

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
          currentLength={watch('title')?.length}
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
          currentLength={watch('content')?.length}
          error={errors.content?.message}
        >
          <Textarea
            variant={errors.content ? 'error' : 'default'}
            maxLength={500}
            {...register('content')}
          />
        </FormField>

        <FormField labelText='투표 항목' isRequired>
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
      <div className='p-4'>
        <Button type='submit' baseColor='primary' className='w-full py-2'>
          투표 생성하기
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
