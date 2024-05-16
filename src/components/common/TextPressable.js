import React from 'react';
import { View, Text, Pressable } from 'react-native';

/**
 * @property {function} onPress - Function to execute when the text is pressed.
 * @property {string} label - String to display in the text.
 * @property {string} color - Color of the text.
 */
export default TextPressable = (props) => {
  return (
    <View>
      <Pressable onPress={props.onPress}>
        <Text className={`text-sm font-medium ${props.color}`}>
          {props.label}
        </Text>
      </Pressable>
    </View>
  );
};
