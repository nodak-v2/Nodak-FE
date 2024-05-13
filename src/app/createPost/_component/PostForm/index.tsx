'use client';

import { Controller, useForm } from 'react-hook-form';

import Button from '@/src/app/_components/Button/Button';
import FormField from '@/src/app/_components/FormField';
import TextInput from '@/src/app/_components/TextInput';
import Textarea from '@/src/app/_components/Textarea';

import ImageUploader from '../ImageUploader';
import { formOptions } from './formSchema';

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm(formOptions);

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <Controller
        name='image'
        control={control}
        render={({ field }) => <ImageUploader onChange={field.onChange} />}
      />

      <fieldset className='flex flex-col gap-6 p-4'>
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
          currentLength={watch('description')?.length}
          error={errors.description?.message}
        >
          <Textarea
            variant={errors.description ? 'error' : 'default'}
            maxLength={500}
            {...register('description')}
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
