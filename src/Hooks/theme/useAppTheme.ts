import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {color} from 'Theme';

const useAppTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return {
    darkText: {color: isDarkMode ? 'white' : 'black'},
    darkBackground: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.white,
    },
    darkPlaceholder: {color: isDarkMode ? color.light1 : color.pinkishGrey},
    darkInputText: {color: isDarkMode ? color.white : color.greyishBrown},
    isDarkMode,
  };
};

export default useAppTheme;
