import { useNavigation } from '@react-navigation/native';
import { Rating } from '../Rating';
import { NavigationProps } from '../../routes';
import NoImage from '../../assets/no-image.png';
import * as S from './styles';

interface Props {
  data: Movie;
}

export function MovieCard({ data }: Props) {
  const { navigate } = useNavigation<NavigationProps>();
  const genres = data.genres.genres.map((genre) => genre.id).join(', ');
  const image = data.primaryImage?.url || undefined;

  return (
    <S.Container
      onPress={() =>
        navigate('Details', {
          data: data,
        })
      }
    >
      <S.Image source={!!image ? { uri: image} : NoImage} />
      <S.Info>
        <S.Title>{data.titleText?.text || 'No Title'}</S.Title>
        <S.Text>Type: {data.titleType?.text || 'No Type'}</S.Text>
        <Rating rating={data.ratingsSummary?.aggregateRating || 0.0} />
        <S.Text>Genres: {genres || 'No Genres'}</S.Text>
        <S.Text>Year: {data.releaseYear?.year || 'No Year'}</S.Text>
      </S.Info>
    </S.Container>
  );
}
