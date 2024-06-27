import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { VoteOption } from '@/src/components/VoteForm';

const isValidOptions = (value: VoteOption[]) => {
  if (!Array.isArray(value)) return false;

  const validOptionsCount = value.filter(
    ({ option }) => option.trim().length >= 1,
  ).length;

  return validOptionsCount >= 2;
};

export const schema = yup.object({
  voteTitle: yup
    .string()
    .required('제목을 입력하세요.')
    .trim()
    .min(2, '최소 2글자 이상이어야 합니다.')
    .max(20, '최대 20글자까지 입력 가능합니다.'),
  content: yup
    .string()
    .required('내용을 입력하세요.')
    .trim()
    .min(2, '최소 2글자 이상이어야 합니다.')
    .max(200, '최대 200글자까지 입력 가능합니다.'),
  channel: yup.string().required('카테고리를 선택하세요'),
  voteOptionContent: yup
    .array(
      yup.object({
        option: yup.string().required('항목을 입력하세요.'),
        imageUrl: yup
          .string()
          .required('')
          .url('올바른 URL을 입력하세요.')
          .nullable(),
      }),
    )
    .required()
    .test('옵션수 검증', '항목을 최소 2개 입력하세요.', isValidOptions),
  endDate: yup.string().required('투표마감일을 입력하세요.'),
});

export const defaultValues = {
  voteTitle: '',
  content: '',
  channel: '',
  endDate: '',
  voteOptionContent: [
    { option: '', imageUrl: '' },
    { option: '', imageUrl: '' },
  ] as VoteOption[],
};

export const formOptions = {
  mode: 'onSubmit',
  defaultValues: defaultValues,
  resolver: yupResolver(schema),
} as const;
