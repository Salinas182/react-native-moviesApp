import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {UpcomingResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcomingMovies = await fetcher.get<UpcomingResponse>('/upcoming');
    return upcomingMovies?.results?.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching upcoming movies');
  }
};
