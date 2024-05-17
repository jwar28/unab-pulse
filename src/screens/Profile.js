import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ProfileInfo from '../components/profile/ProfileInfo';

export default Profile = () => {
  const data = [
    { label: 'Nombre de usuario', content: 'user.userName' },
    { label: 'Correo electronico', content: 'jguerra843@unab.edu.co' },
    { label: 'ID', content: 'U00165107' },
    { label: 'Programa', content: 'Ing. de sistemas' },
    { label: 'Bio', content: 'lorem ipsum' },
  ];

  return (
    <View className='flex flex-col p-6 justify-center'>
      <Text className='text-center text-3xl'>Javier Guerra</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ProfileInfo label={item.label} content={item.content} />
        )}
      />
    </View>
  );
};
