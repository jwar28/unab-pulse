import React from 'react';
import { View, Image } from 'react-native';
import { styled } from 'nativewind';

export const LoginBackground = () => {
  const loginBackground = require('../../../assets/login.png');
  const StyledBackground = styled(Image);

  return (
    <View classname='flex bg-white'>
      <StyledBackground
        source={loginBackground}
        className='w-full h-[840] object-cover absolute top-0'
      />
    </View>
  );
};
