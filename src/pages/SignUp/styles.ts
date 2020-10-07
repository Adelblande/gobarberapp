import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 50px 0 24px;
`;

export const ForgotButton = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const ForgotText = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
`;

export const BackToLogin = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: #232129;
  padding: 16px 0;
`;

export const BackToLoginText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
