import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './HomeStackNavigator';

import {ProfileStackNavigator} from './ProfileStackNavigator';
import {MoreStackNavigator} from './MoreStackNavigator';
import {Platform, StyleSheet, Text, useColorScheme, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color, typography} from 'Theme';
import Menu from 'react-native-vector-icons/Ionicons';
import useAppTheme from 'Hooks/theme/useAppTheme';
import {RootStackParamList} from './Navigation.types';
import {RootState} from 'Redux/Store';
import {useSelector} from 'react-redux';
import CustomTabBar from 'Common/DummyComponents/CustomTabBar/CustomTabBar';
import {useTranslation} from 'react-i18next';

const isIos = Platform.OS === 'ios';
const Tab = createBottomTabNavigator();
export const Main = () => {
  const {t} = useTranslation();
    const {visible} = useSelector((state: RootState) => state.tabBar);
  return (
    <Tab.Navigator
    tabBar={(props) => <CustomTabBar {...props} isVisible={visible} />}
    screenOptions={{
      headerShown: false,
    }}>
        

      <Tab.Screen name="quiz" component={MoreStackNavigator} />

      <Tab.Screen
        name="liveSession"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Add your Ad"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="myLearning"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
        }}
      />

     

      <Tab.Screen
        name="music"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const appTabStyles = StyleSheet.create({
  appTabsContainer: {
    height: isIos ? 55 : 55,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 0,
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
    top: isIos ? 14 : 5,
    gap: isIos ? 3 : 0,
    marginBottom: isIos ? 0 : 5,
    marginTop: isIos ? 5 : 0,
  },
  noneActiveTab: {
    color: '#C9C9C9',
  },
  defualtTab: {fontSize: 12, fontFamily: typography.bold},
});
