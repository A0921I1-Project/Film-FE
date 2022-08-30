
import {Film} from './film';
import {Category} from './category';

export interface CategoryFilm {
  id: number;
  film: Film;
  category: Category;
}
