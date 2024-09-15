import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import useAppTheme from 'Hooks/theme/useAppTheme';
import {useNavigation} from '@react-navigation/native';
import BiometryAuth from '../../../Common/DummyComponents/BiometryAuth/BiometryAuth';

const Login = () => {
  const { t } = useTranslation('transalition');
  const { darkText } = useAppTheme();
  const navigation = useNavigation();

  return (
    <View>
      <Text>{t('SignIn')}</Text>
    </View>
  );
};

export default Login;
