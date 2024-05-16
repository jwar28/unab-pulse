import React from 'react';
import { View, Image } from 'react-native';
import { styled } from 'nativewind';

export const BackgroundComponent = (props) => {
  const StyledBackground = styled(Image);

  return (
    <View classname='flex bg-white'>
      <StyledBackground
        source={props.backgroundImage}
        className='w-full h-[840] object-cover absolute top-0'
      />
    </View>
  );
};

export const LoginBackground = () => (
  <BackgroundComponent backgroundImage={require('../../../assets/login.png')} />
);

export const SignBackground = () => (
  <BackgroundComponent
    backgroundImage={require('../../../assets/singup.png')}
  />
);
