import { Movie } from "./Movie.js";
import { fetchMovies } from "./api.js";
import { renderMovies, bindEvents } from "./ui.js";

(async () => {
  const rawMovies = await fetchMovies();
  const movies = rawMovies.map((m) => new Movie(m));
  renderMovies(movies);
  bindEvents(movies);
})();