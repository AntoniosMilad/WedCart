import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, Linking, AppState } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import Button from 'Common/DynamicComponents/Button/Button';
import { Image } from 'react-native';
import { color } from 'Theme';
import TypographyText from 'Common/DynamicComponents/Typography/TypographyText';

const PermissionScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { t } = useTranslation();
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    

    // Polling every 5 seconds
    const intervalId = setInterval(() => {
      checkPermission();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [navigation]);


  useEffect(() => {
    const handleAppStateChange = (nextAppState: any) => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        // Check permission when app becomes active
        checkPermission();
      }
      setAppState(nextAppState);
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, [appState]);
  
  const checkPermission = async () => {
    const result = await check(Platform.OS === "android" ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    if (result === RESULTS.GRANTED) {
      navigation.replace('main');
    }
  };

  const requestPermission = async () => {
    const result = await request(Platform.OS == "android" ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE); // or PERMISSIONS.IOS.LOCATION_WHEN_IN_USE for iOS

    if (result === RESULTS.GRANTED) {
      navigation.replace('main');
    }else {
      setPermissionDenied(true);
    }
  };

  const handleOpenSettings = () => {
    Linking.openURL( Platform.OS == "ios" ? "app-settings:" : "app-settings://")
  };

  return (
    <View style={styles.container}>
      {permissionDenied ? (
        <>
          <Image
            source={require('../../assets/images/normalImages/location_image.png')}
            style={styles.image}
          />
          <View>
            <TypographyText styles={styles.denyDescription} type="16_Bold" color='black' content='deny_access_description'/>
            <View style={styles.stepsContainer}>
              <View style={styles.stepsLeftColumnContainer}>
                <TypographyText styles={styles.stepsTitle} content='Steps to active location' type="14_SemiBold" color="black" />
                <TypographyText styles={styles.step} type="12_Medium" content='1- Open settings' color="black" />
                <TypographyText styles={styles.step} type="12_Medium" content='2- Choose app permissions' color="black" />
                <TypographyText styles={styles.step} type="12_Medium" content='3- Activate your location' color="black" />
              </View>
              <View style={styles.stepsRightColumnContainer}>
                <TypographyText styles={styles.stepsTitle} content='خطوات تفعيل الموقع' type="14_SemiBold" color="black" />
                <TypographyText styles={styles.step} type="12_Medium" content='١- افتح الإعدادات' color="black" />
                <TypographyText styles={styles.step} type="12_Medium" content="٢- اختر أذونات التطبيق" color="black" />
                <TypographyText styles={styles.step} type="12_Medium" content="٣- قم بتنشيط موقعك" color="black" />
              </View>
            </View>
          </View>
          <Button title={'open_settings'} textColor="white" textType="18_Medium" onPress={handleOpenSettings} size='large'/>
        </>
      ) : (
        <>
          <Image
            source={require('../../assets/images/normalImages/location_image.png')}
            style={styles.image}
          />
            <TypographyText color="black" content='location_access' type="20_Bold" />
            <TypographyText styles={styles.description} content='location_access_description' type="16_Medium" color='black' />
          <Button title={'grant_permission'} textColor="white" textType="18_Medium" onPress={requestPermission} size='large'/>
        </>
      )}
    </View>
  );
};



export default PermissionScreen;
