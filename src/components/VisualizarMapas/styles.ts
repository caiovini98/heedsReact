import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #051923;
  flex: 1;
`;

export const Title = styled.Text`
  padding: 20px 14px 8px 8px;
  color: #06d6a0;
`;

export const SearchContainer = styled.View`
  margin-left: 8px;
  margin-right: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  background-color: #f5f6fa;
  color: #06d6a0;
  border-radius: 10px;
  padding: 2px;
  width: 315px;
`;

export const ViewMap = styled.View`
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow: hidden;
  margin-top: 5px;
`;
