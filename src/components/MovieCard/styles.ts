import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  margin: 8px;
  flex-wrap: wrap;
`;

export const Info = styled.View`
  flex: 1;
  margin: 0 10px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 10px;
  background: #c6c6c6;
`;
