import React from 'react';
import { Image, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  ForgotButton,
  ForgotText,
  CreateAccountButton,
  CreateAccountText,
} from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView contentContainerStyle={{ marginTop: 40 }}>
        <Container>
          <Image source={logoImg} />
          <View>
            <Title>Faça seu login</Title>
          </View>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Button
            onPress={() => {
              console.log('Aqui estou mais um dia...');
            }}
          >
            Entrar
          </Button>
          <ForgotButton
            onPress={() => {
              console.log('Esqueci minha senha');
            }}
          >
            <ForgotText>Esqueci minha senha</ForgotText>
          </ForgotButton>
        </Container>
      </ScrollView>
      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountText>Criar uma conta</CreateAccountText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
