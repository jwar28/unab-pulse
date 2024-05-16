import React from 'react';
import { Pressable, Text } from 'react-native';

/**
 * @property {function} onPress - Function to execute when the button is pressed.
 * @property {string} buttonText - String to display in the button.
 */
export default ButtonPressable = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      className='bg-primary rounded-lg mt-1 block '>
      <Text className='text-base text-white p-2.5 text-center'>
        {props.buttonText}
      </Text>
    </Pressable>
  );
};
