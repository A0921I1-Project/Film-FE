
import {FilmImg} from './film-img';
import {Category} from './category';
import {CategoryFilm} from './category-film';
import {SeatDetail} from './seat-detail';


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

  filmImgs: FilmImg[];
  categoryFilms: CategoryFilm[];
  seatDetails: SeatDetail[];

}
