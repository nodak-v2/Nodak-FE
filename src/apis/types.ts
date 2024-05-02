export interface Vote {
  voteId: number;
  voteTitle: string;
  hasVoted: boolean;
  choice: number;
  options: string[];
}

export interface Post {
  title: string;
  author: string;
  profileImageUrl: string;
  date: string;
  content: string;
  imageUrl: string;
  voteInfo: Vote;
  starCount: number;
  checkStar: boolean;
}
