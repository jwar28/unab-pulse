import React, { useState } from 'react';
import LoginForm from '../components/login/LoginForm';

import { View, Image, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { LoginBackground } from '../components/common/Backgrounds';

export default Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('login success');
      })
      .catch((error) => {
        Alert.alert('Error', error.message, [{ text: 'OK' }]);
      });
  };

  return (
    <View classname='flex bg-white'>
      <LoginBackground />
      <View className=''>
        <LoginForm
          email={email}
          password={password}
          onChangeEmail={setEmail}
          onChangePassword={setPassword}
          onSubmitFunction={() => console.log(email, password)}
          onForgotPassword={() => console.log('forgot password')}
          onRegister={() => console.log('Register')}
        />
      </View>
    </View>
  );
};
