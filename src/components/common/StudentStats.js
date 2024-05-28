import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';

export default function StudentStats(props) {
  return (
    <View className='p-6 flex flex-col items-center'>
      <Text className='text-center font-bold'>Progreso del estudiante</Text>

      <View className='flex flex-row gap-5 p-3'>
        <View className='flex gap-2'>
          <View>
            <Text>Promedio Global</Text>
            <Text className='text-xl font-bold text-primary'>
              {props.globalAverage}
            </Text>
          </View>
          <View>
            <Text>Promedio Semestre</Text>
            <Text className='text-xl font-bold text-primary'>
              {props.actualAverage}
            </Text>
          </View>
        </View>

        <View className='flex flex-col gap-2'>
          <View>
            <Text>Horas libres</Text>
            <Text className='text-xl font-bold text-primary'>
              {props.totalFreeHours}/90
            </Text>
          </View>
          <View>
            <Text>Porcentaje de carrera</Text>
            <Text className='text-xl font-bold text-primary'>
              {props.careerPercentage}%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
