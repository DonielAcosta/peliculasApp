import { useEffect, useState } from 'react';
import type { Movie } from '../../core/uses-cases/movies/entities/movie.entity';

import * as UseCases from '../../core/uses-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';


let popularPageNumber = 1;
export const useMovies = () => {
    const [isLoading, setisLoanding]  = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie>([]);
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

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setisLoanding(false);
    };
  return {
    nowPlaying,
    isLoading,
    popular,
    topRated,
    upcoming,

    //Methods
    popularNextPage: async () =>{
        popularPageNumber++;
        const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher,{
            page: popularPageNumber,
        });
        setPopular( prev =>[...prev, ...popularMovies]);
    },
  };
};
