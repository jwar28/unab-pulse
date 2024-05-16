import React, { useState } from 'react';
import LoginForm from '../components/login/LoginForm';

import { View } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { LoginBackground } from '../components/common/Backgrounds';

export default Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = () => {
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Login success'))
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <View classname='flex bg-white'>
      <LoginBackground />
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onSubmitFunction={() => onHandleLogin()}
        onForgotPassword={() => console.log('forgot password')}
        onRegister={() => navigation.navigate('Signup')}
      />
    </View>
  );
};
