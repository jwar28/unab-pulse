import React from 'react';
import { View, Text, Image } from 'react-native';
import { styled } from 'nativewind';

export default Header = () => {
  const logo = require('../../../assets/logo.png');
  const StyledImage = styled(Image);

  return (
    <View className='flex flex-col w-full justify-center items-center gap-1'>
      <StyledImage
        source={logo}
        className='w-full h-40 aspect-square justify-center'
      />
      <View className='flex flex-row justify-center content-center gap-2'>
        <Text className='text-5xl text-center text-primary font-bold'>
          UNAB
        </Text>
        <Text className='text-5xl font-bold text-gray-700'>Pulse</Text>
      </View>
    </View>
  );
};
