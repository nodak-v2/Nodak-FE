import { getVoteDetail } from '@/src/apis/vote';
import { getMetadata } from '@/src/utils/getMetadata';

const RESULT_MESSAGE = '투표 결과를 확인하세요.';
const VOTE_MESSAGE = 'picky에서 투표해보세요!';

export const getGenerateMetadata =
  () =>
  async ({ params }: { params: { postId: string } }) => {
    try {
      const postId = params.postId;
      const response = await getVoteDetail(postId);
      if (!response || !response.body) {
        return;
      }
      const {
        voteTitle,
        hasVoted,
        voteOptions,
        terminated: isTerminated,
      } = response.body;

      const thumbnailImageUrl =
        voteOptions &&
        voteOptions
          .map(({ voteOptionImageUrl }) => voteOptionImageUrl)
          .filter(url => url)[0];

      const title = `${voteTitle}`;
      const description =
        hasVoted || isTerminated ? RESULT_MESSAGE : VOTE_MESSAGE;

      return getMetadata({
        title,
        description,
        asPath: `/Result/${postId}`,
        image: thumbnailImageUrl,
      });
    } catch (error) {
      return;
    }
  };
