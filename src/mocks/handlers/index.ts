import { handlers as postDetailHandlers } from './post-detail';
import { handlers as postListHandlers } from './post-list';
import { handlers as voteHandlers } from './vote';

export const handlers = [
  ...postDetailHandlers,
  ...postListHandlers,
  ...voteHandlers,
];
