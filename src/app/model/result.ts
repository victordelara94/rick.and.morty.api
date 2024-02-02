import { Character } from './character';

export interface Result {
  character: Character;
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
