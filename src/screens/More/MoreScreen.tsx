import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';
import Divider from 'Common/DynamicComponents/Divider/Divider';
import {useSelector} from 'react-redux';
import {RootState} from 'Redux/Store';
import useAppTheme from 'Hooks/theme/useAppTheme';

export const MoreScreen = () => {
  const {t} = useTranslation('translation');
  const {darkBackground, darkText} = useAppTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, darkBackground]}>
     
      <Divider color={'lightGrey2'} />
    </ScrollView>
  );
};
