import {I18nManager, Platform} from 'react-native';

// isRTL from the native side.
const isRTL = () => I18nManager.isRTL;

/**
 * all fonts in application live here.
 */
const typography = Object.freeze({
  // regular: isRTL()
  //   ? Platform.select({
  //       ios: 'NotoKufiArabic',
  //       android: 'NotoKufiArabicRegular',
  //     })
  //   : 'Lato-Regular',
  // bold: isRTL()
  //   ? Platform.select({
  //       ios: 'NotoKufiArabic-Bold',
  //       android: 'NotoKufiArabicBold',
  //     })
  //   : 'Lato-Bold',

  // in case there is need to use them directly,
  // such as setup stack screens.
  regular: isRTL() ? 'DINNextLTArabic-Regular' : 'DINNextLTArabic-Regular',
  bold: isRTL() ? 'DINNextLTArabic-Bold' : 'DINNextLTArabic-Bold',
  medium: 'DINNextLTArabic-Medium',

  medium1: 'DaxPro-Medium',
});

/**
 * export font as default.
 */
export default typography;
