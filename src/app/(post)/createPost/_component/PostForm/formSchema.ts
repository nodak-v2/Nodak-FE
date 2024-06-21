import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const isValidOptions = (value: string[] | undefined) => {
  if (!Array.isArray(value)) return false;

  const validOptionsCount = value.filter(
    option => option.trim().length >= 1,
  ).length;

  return validOptionsCount >= 2;
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
    .test('옵션수 검증', '최소 2개의 옵션을 입력해야 합니다.', isValidOptions)
    .of(yup.string().trim().required()),
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
