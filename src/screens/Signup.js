import React from 'react';
import SignupForm from '../components/signup/SignupForm';
import { View, Text, Pressable } from 'react-native';
import { SignBackground } from '../components/common/Backgrounds';

export default Signup = () => {
  return (
    <View classname='flex bg-white'>
      <SignBackground />
      <Text>Singup</Text>
      <SignupForm />
    </View>
  );
};
