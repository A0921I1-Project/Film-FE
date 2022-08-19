
import { CategoryFilm } from './category-film';

export interface Film {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  actor: string;
  director: string;
  duration: string;
  trailer: string;
  studioName: string;
  categoryFilms: CategoryFilm[];
}
