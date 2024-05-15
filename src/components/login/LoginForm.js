import React from 'react';
import Header from './Header';
import FormInputField from '../common/FormInputField';
import CustomPressable from '../common/CustomPressable';

import { View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { styled } from 'nativewind';

export default LoginForm = (props) => {
  const EnterButton = styled(Button);

  return (
    <View className='flex flex-col h-screen justify-center pb-20'>
      <Header />

      <View className='p-6 space-y-4'>
        <Text className='text-xl font-bold leading-tight tracking-tight text-gray-900/80'>
          Iniciar sesión
        </Text>

        <View>
          <FormInputField
            label='Correo electrónico'
            placeholder='name@company.com'
            keyboardType='email-address'
            value={props.email}
            onChangeText={props.onChangeEmail}
          />

          <FormInputField
            label='Contraseña'
            placeholder='•••••••••'
            keyboardType='visible-password'
            value={props.password}
            onChangeText={props.onChangePassword}
          />

          <EnterButton
            mode='contained'
            className='bg-primary rounded mt-1'
            onPress={props.onSubmitFunction}>
            Entrar
          </EnterButton>

          <View className='flex flex-row justify-between mt-2'>
            <CustomPressable
              label='¿Olvidaste tu contraseña?'
              color='text-gray-400'
              onPress={props.onForgotPassword}
            />
            <CustomPressable
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
