import { Text } from 'react-native';
import { useData } from '../../contexts/DataContext';
import * as S from './styles';

interface Props {
  text: string;
  isSelected?: boolean;
  selectionEnabled?: boolean;
}

export function Badge({ text, isSelected, selectionEnabled = true }: Props) {
  const { changeGenre, selectedGenre } = useData();

  function handlePress() {
    if (selectionEnabled) {
      changeGenre(selectedGenre === text ? '' : text );
    }
  }

  return (
    <S.Container onPress={handlePress} style={{ backgroundColor: isSelected ? '#ffffff' : '#34353e' }}>
      <Text style={{ color: isSelected ? '#000000' : '#ffffff' }}>{text}</Text>
    </S.Container>
  );
}
