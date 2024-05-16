import React, { useState } from 'react';
import SignupForm from '../components/signup/SignupForm';
import { View } from 'react-native';
import { SignBackground } from '../components/common/Backgrounds';

export default Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View classname='flex bg-white'>
      <SignBackground />
      <SignupForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onRegister={() => console.log('Register')}
        navigateToLogin={() => navigation.navigate('Login')}
      />
    </View>
  );
};
