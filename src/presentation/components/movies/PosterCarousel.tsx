/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Movie } from '../../../core/uses-cases/movies/entities/movie.entity';
import { ScrollView } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies?: Movie[]; // Hacemos el array opcional con ?
  height?: number;
  isLoading?: boolean;
}

export const PosterCarousel = ({ movies = [], height = 440, isLoading = false }: Props) => {
  // Estado de carga
  if (isLoading) {
    return (
      <View style={{ height, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Validación de datos
  if (!movies || movies.length === 0) {
    return (
      <View style={{ height, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No hay películas disponibles</Text>
      </View>
    );
  }

  return (
    <View style={{ height }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {movies.map((movie) => (
          <MoviePoster
            key={movie.id.toString()}
            movie={movie}
            width={300}
            height={height - 20}
          />
        ))}
      </ScrollView>
    </View>
  );
};
