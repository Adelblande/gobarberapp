import React from 'react';
import { Image, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, BackToLogin, BackToLoginText } from './styles';

import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView contentContainerStyle={{ marginTop: 40 }}>
        <Container>
          <Image source={logoImg} />
          <View>
            <Title>Crie sua conta</Title>
          </View>
          <Input name="name" icon="user" placeholder="Nome" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Button
            onPress={() => {
              console.log('Aqui estou mais um dia...');
            }}
          >
            Cadastrar
          </Button>
        </Container>
      </ScrollView>
      <BackToLogin onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToLoginText>Voltar para login</BackToLoginText>
      </BackToLogin>
    </>
  );
};

export default SignUp;
