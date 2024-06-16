import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const isValidOptions = (value: string[] | undefined) => {
  if (!Array.isArray(value)) return false;
  return value.every(
    option => option.trim().length >= 1 && option.trim().length <= 15,
  );
};

const isValidImageUrlPath = (value: string | undefined) => {
  // URL이 https://로 시작하지 않는 경우 'https://'를 붙여서 URL 객체를 생성
  if (value?.startsWith('http://') || value?.startsWith('https://'))
    return true;

  const url = `https://${value}`;

  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

export const schema = yup.object({
  imageUrl: yup
    .string()
    .test('url 검증', '유효한 URL을 입력해주세요.', isValidImageUrlPath),
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
    .test('글자수 검증', '1글자 이상 15글자 이하여야 합니다.', isValidOptions)
    .of(yup.string().trim().required()),
});

export type SchemaType = yup.InferType<typeof schema>;

export const defaultValues: SchemaType = {
  imageUrl: '',
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
