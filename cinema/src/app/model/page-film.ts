import {Film} from './film';

export interface PageFilm {
  content: Film[];
  number: number;
  totalPages: number;
}
