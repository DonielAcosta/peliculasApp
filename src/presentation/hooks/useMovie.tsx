import { useEffect, useState } from 'react';
import * as UseCases from '../../core/uses-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/uses-cases/movies/entities/movie.entity';
import { Cast } from '../../core/uses-cases/movies/entities/cast.entity';

export const useMovie = (movieId: number) => {
    const [isLoading,setIsLoading] = useState(true);
    const [movie, setMovie]        = useState<FullMovie>();
    const [cast, setCast]          = useState<Cast[]>();


    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie = async() => {
        setIsLoading(true);
        const fullMoviePromise =  UseCases.getMovieByIdUseCase(movieDBFetcher,movieId);
        const castPromise      =  UseCases.getMovieCastUseCase(movieDBFetcher,movieId);

        // eslint-disable-next-line @typescript-eslint/no-shadow
        const [fullMovie,cast] = await Promise.all([fullMoviePromise,castPromise]);

        setMovie(fullMovie);
        setCast(cast);
        setIsLoading(false);
    };
    return{
        isLoading,
        movie,
        cast,
    };
};
