import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const isValidOptions = (value: string[] | undefined) => {
  if (!Array.isArray(value)) return false;
  return value.every(option => option.length >= 1 && option.length <= 15);
};

export const schema = yup.object({
  imageUrl: yup.mixed<File>().required(),
  title: yup
    .string()
    .required('필수 입력 항목입니다.')
    .trim()
    .min(2, '최소 2글자 이상이어야 합니다.')
    .max(50, '최대 500글자까지 입력 가능합니다.'),
  content: yup
    .string()
    .required('필수 입력 항목입니다.')
    .trim()
    .min(2, '최소 2글자 이상이어야 합니다.')
    .max(500, '최대 500글자까지 입력 가능합니다.'),
  channel: yup.string().required('필수 선택 항목입니다.'),
  voteOptions: yup
    .array()
    .required('필수 선택 항목입니다.')
    .min(2, '최소 2개의 옵션을 입력해야 합니다.')
    .test('글자수 검증', '1글자 이상 15글자 이하여야 합니다.', isValidOptions),
});

export const defaultValues = {
  imageUrl: new File([], ''),
  title: '',
  content: '',
  channel: '',
  voteOptions: [],
};

export const formOptions = {
  mode: 'onSubmit',
  defaultValues: defaultValues,
  resolver: yupResolver(schema),
} as const;
