import React from 'react';
import ProfileInfo from '../components/profile/ProfileInfo';
import useUserData from '../hooks/useUserData';
import PCarga from './PCarga';
import { View, Text, FlatList, Image, SafeAreaView } from 'react-native';
import { styled } from 'nativewind';
import { Divider } from 'react-native-paper';
import ButtonPressable from '../components/common/ButtonPressable';

export default Profile = () => {
  const ProfilePic = styled(Image);
  const { user, loading, error } = useUserData();
  let data;

  if (user) {
    data = [
      { label: 'Nombre de usuario', content: user.userName },
      { label: 'Correo electronico', content: user.email },
      { label: 'ID', content: user.id },
      { label: 'Programa', content: user.program },
    ];
  }

  if (loading) {
    return <PCarga />;
  }

  return (
    <SafeAreaView className='flex flex-col p-6 h-screen'>
      <View className='bg-primary/90 h-52 w-screen absolute top-0 rounded-b-xl' />
      <View className='flex'>
        <View className='flex items-center'>
          <ProfilePic
            source={{ uri: user.image }}
            className='w-full h-56 aspect-square rounded-full justify-center'
          />
        </View>

        <Text className='text-center text-4xl font-bold my-2 text-black/80'>
          {user.name}
        </Text>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View className=''>
              <View className='py-2 mt-1'>
                <ProfileInfo label={item.label} content={item.content} />
              </View>
              <Divider />
            </View>
          )}
        />

        <Divider />

        <View className='flex flex-col justify-between my-2'>
          <Text className='text-base font-medium'>Bio</Text>
          <Text className='text-base'>{user.bio}</Text>
        </View>

        <ButtonPressable buttonText='Modificar' />
      </View>
    </SafeAreaView>
  );
};
