import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

export const useMovie = (movieId: number) => {
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie = () => {};
    return{
        isLoading,
        // movie: movieData, // Hacemos el objeto movie opcional con ?
    };
};
