/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular,topRated, upcoming, popularNextPage } = useMovies(); // Asegúrate de que tu hook devuelva estos datos

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        {/* Películas en cartelera */}
        <PosterCarousel
        movies={nowPlaying} />

        {/* Películas populares */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />

        {/* Películas top Rated */}
        <HorizontalCarousel
          movies={topRated}
          title="Mejor Calificadas"
        />

        {/* Películas Proximamente */}
        <HorizontalCarousel
          movies={upcoming}
          title="Proximamente"
        />

      </View>
    </ScrollView>
  );
};
