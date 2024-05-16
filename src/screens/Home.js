import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { auth } from '../../config/firebase';

export default Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Pressable
        className='w-40 bg-primary'
        onPress={() => auth.signOut().then(() => console.log('out'))}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
};
