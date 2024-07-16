import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {TopRatedResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRatedMovies = await fetcher.get<TopRatedResponse>('/top_rated');
    return topRatedMovies?.results?.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching top-rated movies');
  }
};
