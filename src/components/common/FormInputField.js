import React from 'react';
import { View, Text, TextInput } from 'react-native';

/**
 * @property {string} label - Label for the input field.
 * @property {string} placeholder - Placeholder text for the input field.
 * @property {string} keyboardType - Type of keyboard to display.
 * @property {string} value - Value of the input field.
 * @property {function} onChangeText - Function to execute when the input field changes.
 */
export default FormInputField = (props) => {
  return (
    <View>
      <Text className='block mb-2 text-sm font-medium text-gray-900'>
        {props.label}
      </Text>
      <TextInput
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={props.onChangeText}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary  focus:border-primary block w-full p-2.5 mb-4'
      />
    </View>
  );
};
