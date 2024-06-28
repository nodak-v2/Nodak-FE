import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const schema = yup.object({
  imageUrl: yup.mixed<File>().required(),
  nickName: yup
    .string()
    .required('닉네임을 입력하세요.')
    .trim()
    .min(2, '최소 2글자 이상이어야 합니다.')
    .max(10, '최대 10글자까지 입력 가능합니다.'),
});

export const defaultValues = {
  imageUrl: new File([], ''),
  nickName: '',
};

export const formOptions = {
  mode: 'onSubmit',
  defaultValues: defaultValues,
  resolver: yupResolver(schema),
} as const;
