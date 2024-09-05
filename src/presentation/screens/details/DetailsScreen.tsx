import React from 'react';
import {ScrollView, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  //const { movieId } = useRoute().params;
  const {movieId} = route.params;
  const {movie, isLoading, cast = []} = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <ScrollView>
      <MovieHeader movie={movie!} />
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
