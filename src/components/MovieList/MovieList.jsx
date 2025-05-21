import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        src={movie.imgUrl}
        title={movie.title}
        href={movie.imdbUrl}
        description={movie.description}
      />
    ))}
  </div>
);
