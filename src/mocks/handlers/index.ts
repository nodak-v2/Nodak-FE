import { handlers as postDetailHandlers } from './post-detail';
import { handlers as postListHandlers } from './post-list';

export const handlers = [...postDetailHandlers, ...postListHandlers];
