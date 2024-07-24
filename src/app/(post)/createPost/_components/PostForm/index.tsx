'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

import { PostRequestBody } from '@/src/apis/createPost';
import VoteForm from '@/src/app/(post)/createPost/_components/VoteForm';
import {
  ChannelType,
  ChannelTypeOfKorean,
  channelToKoreanMap,
} from '@/src/app/_components/ChipContainer';
import Button from '@/src/components/Button/Button';
import FormField from '@/src/components/FormField';
import Selector from '@/src/components/Selector';
import TextInput from '@/src/components/TextInput';
import Textarea from '@/src/components/Textarea';
import TimeInput from '@/src/components/TimeInput';

import { formOptions } from './formSchema';
import { useCreatePost } from './useCreatePost';

const channels: Array<ChannelTypeOfKorean> = [
  '전체',
  '일상',
  '스포츠',
  '연예',
  '공부',
  '여행',
];

const PostForm = () => {
  const searchParams = useSearchParams();
  const channel = searchParams.get('channel') as ChannelType;

  const koreanChannel = channelToKoreanMap[channel];

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm(formOptions);

  const router = useRouter();
  const createPost = useCreatePost();

  const onSubmitPost = (data: PostRequestBody) => {
    createPost(data);
    router.push('/');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitPost)}
      className='flex grow flex-col overflow-y-auto'
    >
      <fieldset className='flex flex-col gap-5'>
        <FormField
          labelText='제목'
          isRequired
          error={errors.voteTitle?.message}
        >
          <TextInput
            variant={errors.voteTitle ? 'error' : 'default'}
            placeholder='투표 제목'
            {...register('voteTitle')}
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
            name='voteOptionContent'
            control={control}
            render={({ field }) => (
              <VoteForm
                onChange={field.onChange}
                error={errors.voteOptionContent?.message}
              />
            )}
          />
        </FormField>
        <FormField labelText='내용' isRequired error={errors.content?.message}>
          <Textarea
            variant={errors.content ? 'error' : 'default'}
            placeholder='내용을 입력하세요'
            {...register('content')}
          />
        </FormField>
        <FormField
          labelText='투표마감일'
          isRequired
          error={errors.endDate?.message}
        >
          <TimeInput
            variant={errors.endDate ? 'error' : 'default'}
            {...register('endDate')}
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
                defaultValue={koreanChannel}
                onChange={field.onChange}
                variant={errors.channel ? 'error' : 'default'}
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
