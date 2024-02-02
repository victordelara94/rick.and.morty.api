import { Result } from './result';

export interface Request {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Result[];
}
