import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default CustomPressable = (props) => {
  return (
    <View>
      <Pressable onPress={props.onPress}>
        <Text className={`text-sm font-medium mt-2 ${props.color}`}>
          {props.label}
        </Text>
      </Pressable>
    </View>
  );
};
