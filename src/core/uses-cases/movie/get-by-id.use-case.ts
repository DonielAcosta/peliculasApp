import { HttpAdapter } from '../../../config/adapters/http/http-adapter';
import { MovieDBMovie } from '../../../infrastruture/interfaces/movie-db.response';
import { FullMovie } from '../movies/entities/movie.entity';
import { MovieMapper } from '../../../infrastruture/interfaces/mappers/movie.mapper';

export  const getMovieByIdUseCase = async (
    fetcher: HttpAdapter,
    movieId: number
):Promise<FullMovie> =>{

    try {
        //fetcher.
        const movie     = await fetcher.get<MovieDBMovie>(`/${movieId}`);
        const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
        //mappeo
        //return fullMovie
        return fullMovie;
    } catch (error) {
        throw new Error(`Cannot get movie by id ${movieId}`);
    }
};
