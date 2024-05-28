import React from 'react';
import { styled } from 'nativewind';
import { Image } from 'react-native';

const StyledImage = styled(Image);

export default ProfilePic = (props) => {
  return (
    <StyledImage
      source={{ uri: props.image }}
      className='w-full h-56 aspect-square rounded-full justify-center'
    />
  );
};
