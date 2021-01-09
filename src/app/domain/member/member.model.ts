import { Sns } from '../sns/sns.model';

export type Member = {
  name: string;
  photo: string;
  snss: Sns[];
};
