import { useData } from '../../contexts/DataContext';
import * as S from './styles';

export function Pagination() {
  const { changePage, page, isLoading } = useData();

  return (
    <S.Container>
      <S.Content>
        <S.Button onPress={() => changePage(page - 1)} disabled={page === 1 || isLoading}>
          <S.Icon name="arrow-left" />
        </S.Button>
        <S.Button>
          <S.Text>{page}</S.Text>
        </S.Button>
        <S.Button onPress={() => changePage(page + 1)} disabled={page === 10 || isLoading}>
          <S.Icon name="arrow-right" />
        </S.Button>
      </S.Content>
    </S.Container>
  );
}
