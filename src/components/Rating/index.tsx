import * as S from './styles';

interface Props {
  rating: number;
}

const stars = [...Array(5).keys()];

export function Rating({ rating }: Props) {
  return (
    <S.Container>
      {stars.map((item, index) => (
        <S.Icon key={index} name={item < Math.floor(rating / 2) ? 'star' : 'star-outline'} />
      ))}
    </S.Container>
  );
}
