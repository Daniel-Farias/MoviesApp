import { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackParamList } from '../../routes';
import { Rating } from '../../components/Rating';
import { Badge } from '../../components/Badge';
import { api } from '../../services/api';
import NoImage from '../../assets/no-image.png';
import * as S from './styles';

export function Details() {
  const navigation = useNavigation();
  const route: RouteProp<StackParamList, 'Details'> = useRoute();
  const data: Movie = route.params.data;
  const image = data.primaryImage?.url || undefined;
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  async function getEpisodes() {
    try {
      const serieData = await api.get(`titles/series/${data.id}`);
      const episodesList = await Promise.all(
        serieData.data?.results?.map(async (episode: Episode) => {
          const response = await api.get(`titles/episode/${episode.tconst}`);
          return response.data.results;
        })
      );

      setEpisodes(episodesList);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while trying to get the episodes list.');
    }
  }

  useEffect(() => {
    navigation.setOptions({ title: data.titleText.text });
    if (data.titleType.isSeries) {
      getEpisodes();
    }
  }, []);

  return (
    <S.Container>
      <S.ImageBlurred source={!!image ? { uri: image } : NoImage} blurRadius={Platform.OS === 'ios' ? 15 : 10} />
      <S.Image source={!!image ? { uri: image } : NoImage} />
      <S.InfoContainer>
        <S.RatingContainer>
          <Rating rating={data.ratingsSummary?.aggregateRating || 0.0} />
          <S.RatingText>{data.ratingsSummary?.aggregateRating || 0.0}/10</S.RatingText>
          <S.RatingText>({data.ratingsSummary?.voteCount || 0}) Votes</S.RatingText>
        </S.RatingContainer>
        <S.GenresContainer>
          {data.genres?.genres?.map((genre, index) => (
            <Badge key={index} text={genre.id} />
          ))}
        </S.GenresContainer>
        <S.Title>{data.titleText?.text}</S.Title>
        <S.Type>
          Type: {data.titleType?.text} - {data.releaseYear?.year}
        </S.Type>
        <S.Description>{data.plot?.plotText?.plainText}</S.Description>
        {data.titleType.isSeries && (
          <>
            <S.EpisodesTitle>Episodes List:</S.EpisodesTitle>
            <S.EpisodesContainer>
              {episodes.length > 0 ? (
                episodes.map((episode, index) => <S.EpisodeText key={index}>{episode.titleText?.text}</S.EpisodeText>)
              ) : (
                <S.EpisodeText>Loading...</S.EpisodeText>
              )}
            </S.EpisodesContainer>
          </>
        )}
      </S.InfoContainer>
    </S.Container>
  );
}
