import { HttpAdapter } from '../../../config/adapters/http/http-adapter';
import { MovieDBResponde } from '../../../infrastruture/interfaces/movie-db.response';
import { MovieMapper } from '../../../infrastruture/interfaces/movie.mapper';
import { Movie } from './entities/movie.entity';

export const moviesTopRatedUseCase = async (fetcher:HttpAdapter):Promise<Movie[]> => {
    try {
        const TopRated = await fetcher.get<MovieDBResponde>('/top_rated');
        console.log(TopRated);
        return TopRated.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.error('Error fetching movies - TopRated', error);
        throw new Error('Error fetching movies - TopRated');
    }
};
