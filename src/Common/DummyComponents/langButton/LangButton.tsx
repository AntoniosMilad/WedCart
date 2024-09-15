import {I18nManager, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import i18n from 'i18n/i18n';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {color, typography} from 'Theme';
import useChangeLang from 'Hooks/useChangeLang';

interface LangButtonProps {
  title: string;
  lang: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LangButton = (props: LangButtonProps) => {
  const {switchLanguage} = useChangeLang(props.setLoading);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        props.setLoading(true);
        // i18n
        //   .changeLanguage(props.lang)
        //   .then(() => {
        //     I18nManager.forceRTL(props.lang === 'ar');
        //     AsyncStorage.setItem('selectedLang', props.lang).then(() => {
        //       RNRestart.Restart();
        //     });
        //   })
        //   .catch((err) => {
        //     console.log('something went wrong while applying RTL');
        //     props.setLoading(false);
        //   });
        switchLanguage(props.lang);
      }}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default LangButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.lightGrey,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: color.greenBlue_Two,
    fontSize: 18,
    fontFamily: typography.notoBold,
  },
});
