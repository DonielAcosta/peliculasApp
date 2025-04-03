import { HttpAdapter } from '../../../config/adapters/http/http-adapter';
import { MovieDBResponde } from '../../../infrastruture/interfaces/movie-db.response';
import { MovieMapper } from '../../../infrastruture/interfaces/movie.mapper';
import { Movie } from './entities/movie.entity';

interface Options {
    page?: number;
    limit?: number;
}

export const moviesPopularUseCase = async (fetcher:HttpAdapter,options:Options):Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<MovieDBResponde>('/popular',{
            params: {
                page:  options?.page ?? 1,
                limit: options?.limit ?? 20,
            },
        });
        console.log(popular);
        return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.error('Error fetching movies - popular', error);
        throw new Error('Error fetching movies - PopularUseCase');
    }
};
