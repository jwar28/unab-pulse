import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PCarga = () => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.textPurple}>Cargando Unab </Text>
        <Text style={styles.textBlack}>Pulse</Text>
      </Text>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <ActivityIndicator size='large' color='#772a92' />
      <Text style={styles.bottomContainer}>
        <Text style={styles.textP}>Ten paciencia, </Text>
        <Text style={styles.textB}>ya casi terminamos!</Text>
      </Text>
      {/* SVG para la forma de olas */}
      <View style={styles.wave}>
        <Svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          style={styles.svg}>
          <Path
            fill='#6A1B9A'
            fillOpacity='1'
            d='M0,32L120,69.3C240,107,480,181,720,197.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textPurple: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 20,
  },
  textBlack: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  textP: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A1B9A',
    marginBottom: 20,
    marginTop: 50,
  },
  textB: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 100,
    marginBottom: 40,
  },
  svg: {
    position: 'absolute',
    bottom: -30,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  bottomContainer: {
    marginTop: 30,
  },
});

export default PCarga;
