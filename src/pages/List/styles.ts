import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator } from 'react-native';


export const Container = styled(SafeAreaView).attrs({
  edges: [],
})`
  flex: 1;
  background: #1c1c27;
`;

export const GenresList = styled.ScrollView`
  padding: 10px 8px;
`;

export const LoadingContainer = styled(ActivityIndicator).attrs({
  size: 'large',
})`
  position: absolute;
  flex: 1;
  top: 40%;
  align-self: center;
`;
