import React, { useCallback, useRef } from 'react';
import { Image, View, ScrollView, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/AuthContext';

import {
  Container,
  Title,
  ForgotButton,
  ForgotText,
  CreateAccountButton,
  CreateAccountText,
} from './styles';

import logoImg from '../../assets/logo.png';

interface SignInCredencials {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const { signIn, user } = useAuth();
  console.log(user);

  const handleSignIn = useCallback(
    async (data: SignInCredencials) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório.')
            .email('Digite um e-mail válido.'),
          password: Yup.string().required('Senha é obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({ email: data.email, password: data.password });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert('Erro na autenticação', 'E-mail ou senha inválido.');
      }
    },
    [signIn],
  );
  return (
    <>
      <ScrollView contentContainerStyle={{ marginTop: 40 }}>
        <Container>
          <Image source={logoImg} />
          <View>
            <Title>Faça seu login</Title>
          </View>
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <Input
              ref={passwordInputRef}
              secureTextEntry
              returnKeyType="send"
              name="password"
              icon="lock"
              placeholder="Senha"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
          </Form>
          <Button
            onPress={() => {
              formRef.current?.submitForm();
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
