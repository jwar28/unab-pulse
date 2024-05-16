import React from 'react';
import { View, Text } from 'react-native';
import FormInputField from '../common/FormInputField';
import ButtonPressable from '../common/ButtonPressable';
import TextPressable from '../common/TextPressable';

/**
 * @property {string} email - Email value.
 * @property {string} password - Password value.
 * @property {function} setEmail - Function to execute when email changes.
 * @property {function} setPassword - Function to execute when password changes.
 * @property {function} onRegister - Function to execute when the register button is pressed.
 * @property {function} navigateToLogin - Function to execute when the login link is pressed.
 */
export default SignupForm = (props) => {
  return (
    <View className='flex flex-col justify-center p-6 pb-20 h-screen '>
      <Text className='text-4xl text-primary font-bold mb-7 text-center'>
        Registrate
      </Text>

      <FormInputField
        label='Email'
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

      <ButtonPressable onPress={props.onRegister} buttonText='Registrarse' />

      <View className='flex flex-row justify-center w-full mt-4'>
        <Text className='mr-1 text-sm font-medium'>¿Ya tienes una cuenta?</Text>
        <TextPressable
          onPress={props.navigateToLogin}
          label='Inicia Sesión'
          color='text-primary'
        />
      </View>
    </View>
  );
};
