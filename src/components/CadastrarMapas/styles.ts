import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #051923;
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  padding: 20px 14px 8px 8px;
  color: #e7ecef;
`;

export const Label = styled.Text`
  padding: 8px 0 8px 0;
  color: #e7ecef;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  color: #051923;
  border-radius: 10px;
  padding: 2px;
  width: 315px;
`;

export const InputDescricao = styled.TextInput`
  background-color: #fff;
  color: #051923;
  border-radius: 10px;
  width: 315px;
  height: 65px;
`;

export const ViewCoordenadas = styled.View`
  margin-top: 12px;
  margin-left: 8px;
  margin-right: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputCoordenadas = styled.TextInput`
  width: 25%;
  height: 40px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #fff;
  border-radius: 20px;
  padding-left: 10px;
  color: #051923;
`;

export const ButtonCadastrar = styled.TouchableOpacity`
  margin-top: 50px;
`;

export const ViewButton = styled.View`
  align-items: center;
  justify-content: center;
`;
