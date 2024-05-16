import React from 'react';
import Header from './Header';
import FormInputField from '../common/FormInputField';
import TextPressable from '../common/TextPressable';
import ButtonPressable from '../common/ButtonPressable';
import { View, Text } from 'react-native';

/**
 * @property {string} email - Email value.
 * @property {string} password - Password value.
 * @property {function} setEmail - Function to execute when email changes.
 * @property {function} setPassword - Function to execute when password changes.
 * @property {function} onSubmitFunction - Function to execute when the form is submitted.
 * @property {function} onForgotPassword - Function to execute when the forgot password link is pressed.
 * @property {function} onRegister - Function to execute when the register link is pressed.
 */
export default LoginForm = (props) => {
  return (
    <View className='flex flex-col h-screen justify-center pb-20'>
      <Header />

      <View className='p-6 space-y-4'>
        <Text className='text-xl font-bold leading-tight tracking-tight text-secondary/90'>
          Iniciar sesión
        </Text>

        <View>
          <FormInputField
            label='Correo electrónico'
            placeholder='name@company.com'
            keyboardType='email-address'
            value={props.email}
            onChangeText={props.setEmail}
          />

          <FormInputField
            label='Contraseña'
            placeholder='•••••••••'
            keyboardType='visible-password'
            value={props.password}
            onChangeText={props.setPassword}
          />

          <ButtonPressable
            onPress={props.onSubmitFunction}
            buttonText='Entrar'
          />

          <View className='flex flex-row justify-between mt-4'>
            <TextPressable
              label='¿Olvidaste tu contraseña?'
              color='text-gray-400'
              onPress={props.onForgotPassword}
            />
            <TextPressable
              label='Regístrate'
              color='text-primary'
              onPress={props.onRegister}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
