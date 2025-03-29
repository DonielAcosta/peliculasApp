import { HttpAdapter } from '../../../config/adapters/http/http-adapter';
import { MovieDBResponde } from '../../../infrastruture/interfaces/movie-db.response';
import { MovieMapper } from '../../../infrastruture/interfaces/movie.mapper';
import { Movie } from './entities/movie.entity';

export const moviesPopularUseCase = async (fetcher:HttpAdapter):Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<MovieDBResponde>('/popular');
        console.log(popular);
        return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.error('Error fetching movies - popular', error);
        throw new Error('Error fetching movies - PopularUseCase');
    }
};
