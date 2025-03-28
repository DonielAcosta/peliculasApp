import { useEffect, useState } from 'react';
import type { Movie } from '../../core/uses-cases/movies/entities/movie.entity';

import * as UseCases from '../../core/uses-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
    const [isLoading, setisLoanding]  = useState(true);
    const [nowPLaying, setNowPLaying] = useState<Movie>([]);
    const [popular, setPopular]       = useState<Movie>([]);
    const [topRated, setTopRated]     = useState<Movie>([]);
    const [upcoming, setUpcoming]     = useState<Movie>([]);

    useEffect(()=>{
        iniialLoad();
    },[]);

    const iniialLoad = async() =>{
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise    = UseCases.moviesPopularUseCase(movieDBFetcher);
        const topRatedPromise   = UseCases.moviesTopRatedUseCase(movieDBFetcher);
        const upcomingPromise   = UseCases.moviesUpcomingUseCase(movieDBFetcher);

        const [
            nowPlayingMovies,
            upcomingMovies,
            popularMovies,
            topRatedMovies,

        ] = await Promise.all([
            nowPlayingPromise,
             upcomingPromise,
             popularPromise,
             upcomingPromise,
             topRatedPromise,
            ]);

        setNowPLaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setisLoanding(false);
    };
  return {
    nowPLaying,
    isLoading,
    popular,
    topRated,
    upcoming,
  };
};
