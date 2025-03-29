import { HttpAdapter } from '../../../config/adapters/http/http-adapter';
import { NowPlayingResponse } from '../../../infrastruture/interfaces/movie-db.response';
import { MovieMapper } from '../../../infrastruture/interfaces/movie.mapper';
import { Movie } from './entities/movie.entity';

export const moviesNowPlayingUseCase = async (fetcher:HttpAdapter):Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
        console.log(nowPlaying);
        return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.error('Error fetching movies - NowPlaying', error);
        throw new Error('Error fetching movies - NowPlaying');
    }
};
