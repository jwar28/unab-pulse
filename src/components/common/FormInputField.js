import React from 'react';
import { View, Text, TextInput } from 'react-native';

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
