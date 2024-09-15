import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18n/i18n';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

const useChangeLang = (loading?: (arg: boolean) => void) => {
  const switchLanguage = (lang: string) => {
    i18n
      .changeLanguage(lang)
      .then(() => {
        I18nManager.forceRTL(lang === 'ar');
        AsyncStorage.setItem('selectedLang', lang).then(() => {
          RNRestart.Restart();
        });
      })
      .catch((err) => {
        console.log('something went wrong while applying RTL');
        loading && loading(false);
      });
  };

  return {
    switchLanguage,
  };
};

export default useChangeLang;
