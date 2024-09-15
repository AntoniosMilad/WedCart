import React from 'react';
import {View, StyleSheet, Animated, TextInput, I18nManager,Text} from 'react-native';


import SplashImage from 'assets/images/svg/dummy/splash_image.svg';

import {color} from 'Theme';
import {useTranslation} from 'react-i18next';
import { styles } from './styles';
import { LogoIcon } from '../Icons/HomeIcon';
const Header: React.FC<{headerTranslateY: any}> = ({headerTranslateY}) => {
  const {t} = useTranslation('translation');

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{translateY: 0}],
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        },
      ]}>
      <View style={styles.topHeader}>
        {/* <AdditionalCourses /> */}
        <View style={styles.iconContainer}>
          {/* <AdditionalCourses /> */}
        </View>
      </View>
      <View style={styles.searchContainer}>
      
        <LogoIcon />

      </View>
    </Animated.View>
  );
};



export default Header;
