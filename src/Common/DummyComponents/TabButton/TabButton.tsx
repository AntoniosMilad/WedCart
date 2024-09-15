import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color, typography} from 'Theme';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {HomeMenu} from 'Common/DummyComponents/Icons/HomeIcon';
import {useRTL} from 'Hooks/useRTL';
import TypographyText from 'Common/DynamicComponents/Typography/TypographyText';
import {StackNavigation} from 'navigation/Navigation.types';
import {store} from 'Redux/Store';
import {hideBothTabBars} from 'Redux/slices/TabBar/tabBarSlice';

const isIos = Platform.OS === 'ios';

const AddTabButton = ({children}: any) => {
  const {t} = useTranslation('translation');
  const navigation = useNavigation<StackNavigation>();
  const {isRTL} = useRTL();
  return (
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
      <View
        style={{
          position: 'absolute',
          top: 40,
          width: 89,
          alignItems: 'center',
          marginTop: isRTL ? 9 : 12,
        }}>
        <TypographyText
          type="12_Reguler"
          content={t('')}
          color={'gray'}
          styles={{marginTop: isIos ? 15 : 8}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AddTabButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: isIos ? -55 : -45,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 0,
  },
  buttonStyle: {
    width: 56,
    height: 56,
    borderRadius: 50,
    backgroundColor: color.greenBlue_Two,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
