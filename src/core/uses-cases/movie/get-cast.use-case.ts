import { HttpAdapter } from '../../../config/adapters/http/http-adapter';
import { CastMapper } from '../../../infrastruture/interfaces/mappers/cast.mapper';
import { MovieDBCastResponse } from '../../../infrastruture/interfaces/movie-db.response';
import { Cast } from '../movies/entities/cast.entity';

export const getMovieCastUseCase = async(fetcher:HttpAdapter,movieId:number):Promise<Cast[]> =>{
    try {
        // fetcher.
        const {cast} = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);
        //mappeo
        const actores = cast.map( CastMapper.fromMovieDBCastToEntity);
        //return movieCast
        return actores;
    } catch (error) {
        console.error(`Cannot get movie cast ${movieId}`);
    }
}


