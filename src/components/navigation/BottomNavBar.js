import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from '../../screens/Home';
import Search from '../../screens/Search';
import Profile from '../../screens/Profile';

export default BottomNavBar = () => {
  const HomeRoute = () => <Home />;
  const SearchRoute = () => <Search />;
  const ProfileRoute = () => <Profile />;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home' },
    {
      key: 'search',
      title: 'Buscar',
      focusedIcon: 'feature-search',
      unfocusedIcon: 'feature-search-outline',
    },
    {
      key: 'profile',
      title: 'Perfil',
      focusedIcon: 'account-circle',
      unfocusedIcon: 'account-circle-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
