import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import SplashImage from '../../assets/images/svg/dummy/splash_image.svg'
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';


const SplashScreen: React.FC<{navigation: any}> = ({ navigation }) => {

  const {t} = useTranslation()

  useEffect(() => {
    const timer = setTimeout(() => {
      checkPermission()
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  const checkPermission = async () => {
      navigation.replace('main'); 
  };

  return (
    <View style={styles.container}>
      <SplashImage style={styles.image} />
      <Text style={styles.text}>{t("welcome")}</Text>
    </View>
  );
};


export default SplashScreen;
