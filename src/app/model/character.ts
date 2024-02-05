export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  url: string;
  status: string;
  species: string;
  type: string;
  origin: {
    name: string;
    url: string;
  };
}
export interface Select {
  key: string;
  value: string;
}
