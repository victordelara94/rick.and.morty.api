import { Character } from './character';

export interface Request {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Character[];
}
