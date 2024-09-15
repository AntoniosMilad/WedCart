import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from './Main';
import Login from 'screens/Auth/Login/Login';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageHelper from 'Utilts/AsyncStorage/AsyncStorageHelper';
import SplashScreen from 'screens/Splash/SplashScreen';
// import LocationPermissionScreen from 'screens/LocationPermission/LocationPermissionScreen';
import AuthScreen from 'screens/Auth/AuthScreen/AuthScreen';
import ChoosePathScreen from 'screens/Auth/ChoosePathScreen/ChoosePathScreen';
// import {setUser} from 'Redux/slices/user/userSlice';

const AppStackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'white',
  };
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const [selectedLang, setSelectedLang] = React.useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    AsyncStorage.getItem('selectedLang').then((selectedLang) => {
      setSelectedLang(selectedLang);
      setLoading(false);
    });
  }, []);

  // const getUserData = async () => {
  //   await AsyncStorageHelper.getItem('user').then((res) => {
  //     const user = JSON.parse(res);
  //     dispatch(setUser(user));
  //   });
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="red" style={{alignItems: 'center' , justifyContent: 'center'}}/>;
  }

  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: backgroundStyle.backgroundColor,
        }}>

          <AuthStack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            {/* <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} options={{ headerShown: false }} /> */}
            <Stack.Screen
              name="main"
              component={Main}
              options={{headerShown: false}}
            />
            <AuthStack.Screen
              name="AuthScreen"
              component={AuthScreen}
              options={{headerShown: false}}
            />
            <AuthStack.Screen
              name="ChoosePathScreen"
              component={ChoosePathScreen}
              options={{headerShown: false}}
            />
    
          </AuthStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppStackNavigation;
