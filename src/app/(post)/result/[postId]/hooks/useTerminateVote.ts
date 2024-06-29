import { useTerminateVoteAPI } from '@/src/apis/vote';

const useTerminateVote = (postId: string) => {
  const terminateVote = useTerminateVoteAPI(postId);

  return async () => await terminateVote();
};

export default useTerminateVote;
