import { CreatePostRequest } from '@/src/apis/postDetail';
import { SchemaType } from '@/src/app/(post)/createPost/_component/PostForm/formSchema';

export const formValueToRequestValue = (
  formValue: SchemaType,
): CreatePostRequest => {
  return {
    title: formValue.title,
    content: formValue.content,
    imageUrl: formValue.imageUrl || '',
    channel: formValue.channel,
    voteTitle: formValue.title,
    voteOptionContent: formValue.voteOptions.reduce(
      (acc, option, index) => ({
        ...acc,
        [index + 1]: option,
      }),
      {},
    ),
  };
};
