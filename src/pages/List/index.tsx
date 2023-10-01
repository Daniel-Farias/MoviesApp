import { FlatList } from 'react-native';
import { useData } from '../../contexts/DataContext';
import { Badge } from '../../components/Badge';
import { MovieCard } from '../../components/MovieCard';
import { Pagination } from '../../components/Pagination';
import * as S from './styles';

const genres = [
  'Action',
  'Adult',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'Film-Noir',
  'Game-Show',
  'History',
  'Horror',
  'Music',
  'Musical',
  'Mystery',
  'News',
  'Reality-TV',
  'Romance',
  'Sci-Fi',
  'Short',
  'Sport',
  'Talk-Show',
  'Thriller',
  'War',
  'Western',
];

export function List() {
  const { isLoading, selectedGenre, movies } = useData();

  return (
    <S.Container>
      <S.GenresList horizontal={true} showsHorizontalScrollIndicator={false}>
        {genres.map((genre) => (
          <Badge text={genre} isSelected={selectedGenre === genre} key={genre} />
        ))}
      </S.GenresList>
      {isLoading ? (
        <S.LoadingContainer />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item: Movie) => item.id}
          renderItem={({ item }) => <MovieCard data={item} />}
        />
      )}
      <Pagination />
    </S.Container>
  );
}
