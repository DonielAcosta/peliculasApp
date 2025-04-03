/* eslint-disable react-native/no-inline-styles */
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Movie } from '../../../core/uses-cases/movies/entities/movie.entity';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/Navigation';


interface Props {
  movie: Movie;
  heigth?: number,
  width?: number
}




export const MoviePoster = ({movie, height = 420, width = 300 }: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    console.log('Poster URL:', movie.poster); // Verificar la URL de la imagen
    return (
      <Pressable
        onPress={ () => navigation.navigate('Details',{ movieId: movie.id }) }
        style={ ({ pressed }) => ({
          width,
          height,
          marginHorizontal: 2,
          paddingBottom: 15,
          paddingHorizontal: 2,
          opacity: pressed ? 0.9 : 1,
        })
        }
      >
        <View style={ styles.imageContainer }>
          <Image
            style={{ width: '100%', height: '100%', borderRadius: 18 }}
            source={{ uri: movie.poster }}
          />

        </View>
      </Pressable>
    );
  };

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    },
});
