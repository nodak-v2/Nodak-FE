import * as yup from 'yup';

export const schema = yup.object({
  profileImageUrl: yup
    .string()
    .required('')
    .url('올바른 URL을 입력하세요.')
    .nullable(),
  nickname: yup
    .string()
    .required('닉네임을 입력하세요.')
    .trim()
    .min(2, '최소 2글자 이상이어야 합니다.')
    .max(10, '최대 10글자까지 입력 가능합니다.'),
});
