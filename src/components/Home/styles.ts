import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #051923;
  flex: 1;
  padding: 4px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  padding: 20px 14px 8px 14px;
  font-size: 24px;
  font-weight: bold;
  color: #06d6a0;
`;

export const ViewButton = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonOptions = styled.TouchableOpacity``;

export const Label = styled.Text`
  color: #06d6a0;
  width: 85%;
  height: 50px;
  border-radius: 50px;
  padding: 8px 15px;
  font-size: 18px;
  color: #fff;
`;

export const ViewButtonOptions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.Text`
  color: #06d6a0;
`;
