import {Category} from "./category";
import {Film} from "./film";

export interface CategoryFilm {
  id: number;
  film: Film;
  category: Category;
}
