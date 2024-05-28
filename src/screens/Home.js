import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { auth } from '../../config/firebase';
import useUserData from '../hooks/useUserData';
import ProfilePic from '../components/common/ProfilePic';
import PCarga from './PCarga';
import StudentStats from '../components/common/StudentStats';
import ButtonPressable from '../components/common/ButtonPressable';

export default Home = () => {
  const { user, loading, error } = useUserData();

  if (loading) {
    return <PCarga />;
  }

  return (
    <ScrollView>
      <View className='bg-primary/90 h-80 w-screen top-0 rounded-b-xl flex items-center p-5 space-y-5'>
        <ProfilePic image={user.image} />
        <Text className='text-white text-3xl font-bold'>{user.name}</Text>
      </View>
      <View>
        <StudentStats
          globalAverage={user.globalAverage}
          actualAverage={user.actualAverage}
          totalFreeHours={user.totalFreeHours}
          careerPercentage={user.careerPercentage}
        />
      </View>
      <View className='px-10'>
        <ButtonPressable
          onPress={() => auth.signOut().then(() => console.log('out'))}
          buttonText='Sign out'
        />
      </View>
    </ScrollView>
  );
};
