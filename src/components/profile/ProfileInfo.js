import React from 'react';
import { View, Text } from 'react-native';

export default ProfileInfo = (props) => {
  return (
    <View className='flex flex-row justify-between mb-2'>
      <Text className='text-base'>{props.label}</Text>
      <Text className='text-base'>{props.content}</Text>
    </View>
  );
};
