import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useRTL} from 'Hooks/useRTL';
import useAppTheme from 'Hooks/theme/useAppTheme';
import TypographyText from '../Typography/TypographyText';
import {TextStyle as TextFont} from '../../DynamicComponents/Typography/Typography.system';
import {lightPalette} from 'Theme/color';
import LogoImage from '../../../assets/images/svg/dummy/splash_image.svg';

const {isRTL} = useRTL();

interface ScreenHeaderProps {
  title?: string;
  navigation: any;
  textColor?: keyof typeof lightPalette;
  textType?: keyof typeof TextFont;
  showLogo?: boolean; // Optional prop to show logo
}

const ScreenHeader = (props: ScreenHeaderProps) => {
  const {title, navigation, textColor = 'black', textType = '18_Medium', showLogo = false} = props;
  const {darkBackground, isDarkMode} = useAppTheme();

  return (
    <View style={[styles.header, darkBackground]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.arrowButton}>
        <Icon
          name="arrowleft"
          size={25}
          color={isDarkMode ? 'white' : 'black'}
        />
      </TouchableOpacity>
      <View style={styles.headerContent}>
        {showLogo ? (
          <LogoImage style={styles.logo} width={100} height={40}/>
        ) : (
          <TypographyText type={textType} color={textColor} content={title || ""}/>
        )}
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  header: {
    height: 50,
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButton: {
    position: 'absolute',
    left: 10,
    bottom: 15,
    transform: [
      {rotateY: isRTL ? '180deg' : '0deg'},
    ],
  },
  logo: {
    width: 100, 
    height: 40, 
  },
});
