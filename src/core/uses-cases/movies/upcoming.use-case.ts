import { HttpAdapter } from '../../../config/adapters/http/http-adapter';
import { MovieDBResponde } from '../../../infrastruture/interfaces/movie-db.response';
import { MovieMapper } from '../../../infrastruture/interfaces/mappers/movie.mapper';
import { Movie } from './entities/movie.entity';

export const moviesUpcomingUseCase = async (fetcher:HttpAdapter):Promise<Movie[]> => {
    try {
        const upcoming = await fetcher.get<MovieDBResponde>('/upcoming');
        console.log(upcoming);
        return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.error('Error fetching movies - upcoming', error);
        throw new Error('Error fetching movies - upcoming');
    }
};
