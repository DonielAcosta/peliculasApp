/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { FlatList, Text, View, ActivityIndicator, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { Movie } from '../../../core/uses-cases/movies/entities/movie.entity';
import { MoviePoster } from './MoviePoster';

interface Props {
  movies: Movie[] | null;
  title?: string;
  isLoading?: boolean;
  error?: string | null;
  loadNextPage?: () => void;
}

export const HorizontalCarousel = ({movies,title,isLoading = false, error = null, loadNextPage}: Props) => {

  const isLoading1 = useRef(false);

  useEffect(() =>{
    setTimeout(() =>{
      isLoading1.current = false;
    },200);

  },[movies]);

  const onScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) =>{
    if(isLoading1.current){return;}
    const {
      contentOffset,
      layoutMeasurement,
      contentSize,
    } = event.nativeEvent;

    const isEndReached = ( contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
    if(!isEndReached){return;}


    isLoading1.current = true;
    //cargar mas peliculas
    loadNextPage && loadNextPage();
  };
  // Estado de carga
  if (isLoading) {
    return (
      <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Manejo de errores
  if (error) {
    return (
      <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  // Validación de datos
  if (!movies || !Array.isArray(movies) || movies.length === 0) {
    return (
      <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No hay películas disponibles</Text>
      </View>
    );
  }

  return (
    <View style={{ height: title ? 260 : 220 }}>
      {title && (
        <Text style={{
          fontSize: 30,
          fontWeight: '300',
          marginLeft: 10,
          marginBottom: 10,
        }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item,index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};
