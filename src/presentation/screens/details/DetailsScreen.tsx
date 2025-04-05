import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, ScrollView } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movies/movie/MovieHeader';
import { MovieDetails } from '../../components/movies/movie/MovieDetails';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams,'Details'>{

};

export const DetailsScreen = ({route}:Props) => {

  const {movieId} = route.params;
  // const { movieId} = useRoute().params;
  console.log('Movie ID:', movieId); // Verificar el ID de la película
  const {isLoading,movie,cast =[]} = useMovie(movieId);

  if (isLoading) {
    return (
      <FullScreenLoader/>
    );
  }
  return (
    <ScrollView>
        {/* [header] */}
          <MovieHeader
          originalTitle={movie!.originalTitle}
          title={movie!.title}
          poster={movie!.poster}
          />
        {/* [Detalles] */}
        <MovieDetails
          movie={movie!}
          cast={cast}
        />
    </ScrollView>
  );
};
