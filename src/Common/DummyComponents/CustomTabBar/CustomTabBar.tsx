import React, {useRef, useEffect} from 'react';
import {View, TouchableOpacity, Platform, Animated} from 'react-native';
import {
  ActiveChatIcon,
  ActiveCommercialIcon,
  ChatIcon,
  CommercialIcon,
  HomeIcon,
  InActiveHomeIcon,
  InActiveProfileIcon,
  ProfileIcon,
  QuizIcon,
  LiveSessionIcon,
  MusicIcon,
  MyLearningIcon,
} from '../Icons/HomeIcon';
import TypographyText from 'Common/DynamicComponents/Typography/TypographyText';
import {color} from 'Theme';
import useAppTheme from 'Hooks/theme/useAppTheme';
import TabButton from '../TabButton/TabButton';
import CustomTabBarButton from '../CustomTabBarButton/CustomTabBarButton';
import {styles} from './styles';
import {TabBarAction} from 'Redux/slices/TabBar/tabBarSlice';
import {useSelector} from 'react-redux';
import {RootState} from 'Redux/Store';

const isIos = Platform.OS === 'ios';

function CustomTabBar({
  state,
  descriptors,
  navigation,
  isVisible,
  isAddPostStack,
}: {
  state: any;
  descriptors: any;
  navigation: any;
  isVisible: TabBarAction;
  isAddPostStack: boolean;
}) {
  const {darkBackground} = useAppTheme();
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: isVisible ? 0 : 100,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: isVisible ? 1 : 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isVisible, translateY, opacity]);

  const APPICONS = {
    quiz: {
      active: <QuizIcon fillColor={color.greenBlue_Two} />,
      inactive: <QuizIcon />,
    },
    liveSession: {active: <LiveSessionIcon fillColor={color.greenBlue_Two} />, inactive: <LiveSessionIcon />},
    myLearning: {active: <MyLearningIcon fillColor={color.greenBlue_Two}/>, inactive: <MyLearningIcon />},
  
    music: {
      active: <MusicIcon fillColor={color.greenBlue_Two}/>,
      inactive: <MusicIcon />,
    },
    'Add your Ad': {
      active: <TabButton />,
      inactive: <TabButton />,
    },
  };

  return (
    <>
      {!isAddPostStack ? (
        <Animated.View
          style={[
            {flexDirection: 'row', backgroundColor: 'white'},
            styles.appTabButtons,
            {height: 50},
            {transform: [{translateY}]},
            {opacity: opacity},
          ]}>
          {state.routes.map(
            (
              route: {
                key: React.Key | null | undefined;
                name: any;
                params: any;
              },
              index: any,
            ) => {
              const {options} = descriptors[route.key as string];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;

              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
              };

              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };

              return (
                <TouchableOpacity
                  key={route.key}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? {selected: true} : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={styles.tabButton}>
                  <View style={styles.tabItem}>
                    {isFocused
                      ? APPICONS[label as keyof typeof APPICONS]?.active
                      : APPICONS[label as keyof typeof APPICONS]?.inactive}
                    <TypographyText
                      type={isFocused ? '12_SemiBold' : '12_Medium'}
                      content={label === 'Add your Ad' ? null : label}
                      color={isFocused ? 'greenBlue_Two' : 'gray'}
                    />
                  </View>
                </TouchableOpacity>
              );
            },
          )}
        </Animated.View>
      ) : null}
      {isAddPostStack ? <CustomTabBarButton /> : <CustomTabBarButton /> }
    </>
  );
}

export default CustomTabBar;
