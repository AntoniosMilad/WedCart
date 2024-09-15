import {Animated, StyleSheet, Text, View,TouchableOpacity,Platform} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Button from 'Common/DynamicComponents/Button/Button';
import {useTranslation} from 'react-i18next';
import {TextStyle} from 'Common/DynamicComponents/Typography/Typography.system';
import {useSelector} from 'react-redux';
import {RootState, store} from 'Redux/Store';
import {HomeMenu} from '../Icons/HomeIcon';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from 'navigation/Navigation.types';
import {hideBothTabBars} from 'Redux/slices/TabBar/tabBarSlice';
import {useRTL} from 'Hooks/useRTL';

const CustomTabBarButton = ({children}: any) => {
  const {t} = useTranslation('translation');
  const {visible} = useSelector((state: RootState) => state.tabBar);
  const translateY = useRef(new Animated.Value(100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation<StackNavigation>();
  const {isRTL} = useRTL();
  const isIos = Platform.OS === 'ios';

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: visible ? 100 : 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: visible ? 0 : 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [visible, translateY, opacity]);

  return (
    <Animated.View
      style={[
        {backgroundColor: 'white',height:0}, // Set the backgroundColor to transparent and use overflow: 'hidden'        {transform: [{translateY}]},
        {opacity: opacity},
      ]}>
      {/* <Button
        size="small"
        onPress={() => {
          // store.dispatch(hideBothTabBars(true));
          navigate.navigate('Add your Ad');
        } }
        title={t('')}
        buttonTextStyle={TextStyle['16_Bold']}
        customStyle={styles.buttonContainer}
        icon={<HomeMenu />} 
        textColor={'light'} textType={'12_SemiBold'}      /> */}


<TouchableOpacity
      style={styles.container}
      onPress={() => {
        store.dispatch(hideBothTabBars(true));
        navigation.navigate('Add your Ad');
      }}>
      <View style={styles.buttonStyle}>
        <HomeMenu />
        {children}
      </View>

      </TouchableOpacity>
    </Animated.View>
  );
};

export default CustomTabBarButton;
