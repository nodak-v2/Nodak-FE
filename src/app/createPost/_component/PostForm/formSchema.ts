import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const schema = yup.object({
  image: yup.mixed<File>().required(),
  title: yup
    .string()
    .required('필수 입력 항목입니다.')
    .trim()
    .min(2, '최소 2글자 이상이어야 합니다.')
    .max(50, '최대 500글자까지 입력 가능합니다.'),
  description: yup
    .string()
    .required('필수 입력 항목입니다.')
    .trim()
    .min(2, '최소 2글자 이상이어야 합니다.')
    .max(500, '최대 500글자까지 입력 가능합니다.'),
});

export const defaultValues = {
  image: new File([], ''),
  title: '',
  description: '',
};

export const formOptions = {
  mode: 'onChange',
  defaultValues: defaultValues,
  resolver: yupResolver(schema),
} as const;
