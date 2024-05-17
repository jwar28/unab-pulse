import React, { createContext, useState, useContext, useEffect } from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import BottomNavBar from './src/components/navigation/BottomNavBar';

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

HomeStack = () => {
  return <BottomNavBar />;
};

AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Signup'
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default function App() {
  const { authenticatedUser } = useContext(AuthenticatedUserContext);

  return (
    <SafeAreaView style={style.AndroidSafeArea}>
      <AuthenticatedUserProvider>
        <PaperProvider>
          <RootNavigator />
        </PaperProvider>
      </AuthenticatedUserProvider>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
