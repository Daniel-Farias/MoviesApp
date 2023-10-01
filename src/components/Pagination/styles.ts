import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

interface Props {
  disabled: boolean;
}

export const Container = styled.View`
  width: 100%;
  position: absolute;
  bottom: 10px;
`;

export const Content = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity.attrs<Props>((props) => ({
  disabled: props.disabled ?? false,
}))`
  width: 70px;
  height: 35px;
  background: ${(props) => (props.disabled ?  "#c6c6c6" : "#000000")};
  align-items: center;
  justify-content: center;
  margin: 10px 2px;
  border-radius: 5px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const Icon = styled(RNIcon)`
  font-size: 20px;
  color: #ffffff;
`;