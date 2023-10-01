import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #1c1c27;
`;

export const ImageBlurred = styled.Image`
  width: 100%;
  height: 260px;
  background: #c6c6c6;
`;

export const Image = styled.Image`
  top: 0;
  width: 200px;
  height: 260px;
  position: absolute;
  align-self: center;
  background: #c6c6c6;
`;

export const InfoContainer = styled.View`
  width: 100%;
  padding: 10px;
`;

export const RatingContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const RatingText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #ffffff;
  font-weight: bold;
  margin-top: 10px;
`;

export const Type = styled.Text`
  color: #ffffff;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #ffffff;
  margin-top: 10px;
`;

export const GenresContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const EpisodesContainer = styled.View`
  margin: 10px 0;
`;

export const EpisodesTitle = styled.Text`
  color: #ffffff;
  font-size: 18px;
  margin-top: 15px;
`;

export const EpisodeText = styled.Text`
  color: #ffffff;
`;
