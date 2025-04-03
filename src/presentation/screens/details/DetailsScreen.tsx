import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams,'Details'>{

};

export const DetailsScreen = ({route}:Props) => {

  const {movieId} = route.params;
  // const { movieId} = useRoute().params;
  console.log('Movie ID:', movieId); // Verificar el ID de la película
  return (
    <View>
        <Text>DetailsScreen</Text>
    </View>
  );
};
