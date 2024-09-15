import {I18nManager} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const isRTL = () => I18nManager.isRTL;

export const Fonts = {
  FONT_FAMILY_EXTRABOLD: isRTL() ? 'DINNextLTAArabic-Black' : 'DaxPro-Extrabold',
  FONT_FAMILY_BOLD: isRTL() ? 'DINNextLTArabic-Bold' : 'DaxPro-Bold',
  FONT_FAMILY_SEMIBOLD: isRTL() ? 'DINNextLTAArabic-Heavy' : 'DaxPro-Bold',
  FONT_FAMILY_REGULAR: isRTL() ? 'DINNextLTArabic-Regular' : 'Montserrat-Regular',
  FONT_FAMILY_MEDIUM: isRTL() ? 'DINNextLTArabic-Medium' : 'DaxPro-Medium',
  FONT_FAMILY_LIGHT: isRTL() ? 'DINNEXTLTARABIC-LIGHT' : 'DaxPro-Light',
};

export const Size = {
  h0: moderateScale(72),
  h1: moderateScale(38),
  h2: moderateScale(34),
  h3: moderateScale(30),
  h4: moderateScale(24),
  h5: moderateScale(20),
  h6: moderateScale(18),
  regular: moderateScale(16),
  medium: moderateScale(14),
  small: 12,
  tiny: moderateScale(8.5),
};

export const TextStyle = {
  '12_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.small,
  },
  '12_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.small,
  },
  '12_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.small,
  },
  '12_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.small,
  },
  '12_ExtraBold': {
    fontFamily: Fonts.FONT_FAMILY_EXTRABOLD,
    fontSize: Size.small,
  },
  '14_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.medium,
  },
  '14_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.medium,
  },
  '14_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.medium,
  },
  '14_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.medium,
  },
  '14_ExtraBold': {
    fontFamily: Fonts.FONT_FAMILY_EXTRABOLD,
    fontSize: Size.medium,
  },
  '16_Reguler': {
    fontFamily: Fonts.FONT_FAMILY_REGULAR,
    fontSize: Size.regular,
  },
  '16_Medium': {
    fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    fontSize: Size.regular,
  },
  '16_SemiBold': {
    fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    fontSize: Size.regular,
  },
  '16_Bold': {
    fontFamily: Fonts.FONT_FAMILY_BOLD,
    fontSize: Size.regular,
  },
  '16_ExtraBold': {
    fontFamily: Fonts.FONT_FAMILY_EXTRABOLD,
    fontSize: Size.regular,
  },
  '18_Reguler': {
      fontFamily: Fonts.FONT_FAMILY_REGULAR,
      fontSize: Size.h6,
    },
    '18_Medium': {
        fontFamily: Fonts.FONT_FAMILY_MEDIUM,
        fontSize: Size.h6,
    },
    '18_SemiBold': {
        fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
        fontSize: Size.h6,
    },
    '18_Bold': {
        fontFamily: Fonts.FONT_FAMILY_BOLD,
        fontSize: Size.h6,
    },
    '18_ExtraBold': {
      fontFamily: Fonts.FONT_FAMILY_EXTRABOLD,
      fontSize: Size.h6,
    },
    '20_Reguler': {
      fontFamily: Fonts.FONT_FAMILY_REGULAR,
      fontSize: Size.h5,
    },
    '20_Medium': {
      fontFamily: Fonts.FONT_FAMILY_MEDIUM,
      fontSize: Size.h5,
    },
    '20_SemiBold': {
      fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
      fontSize: Size.h5,
    },
    '20_Bold': {
      fontFamily: Fonts.FONT_FAMILY_BOLD,
      fontSize: Size.h5,
    },
    '20_ExtraBold': {
      fontFamily: Fonts.FONT_FAMILY_EXTRABOLD,
      fontSize: Size.h5,
    },
    '24_Reguler': {
      fontFamily: Fonts.FONT_FAMILY_REGULAR,
      fontSize: Size.h4,
    },
    '24_Medium': {
      fontFamily: Fonts.FONT_FAMILY_MEDIUM,
      fontSize: Size.h4,
    },
    '24_SemiBold': {
      fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
      fontSize: Size.h4,
    },
    '24_Bold': {
      fontFamily: Fonts.FONT_FAMILY_BOLD,
      fontSize: Size.h4,
    },
    '24_ExtraBold': {
      fontFamily: Fonts.FONT_FAMILY_EXTRABOLD,
      fontSize: Size.h4,
    },
    '30_Reguler': {
      fontFamily: Fonts.FONT_FAMILY_REGULAR,
      fontSize: Size.h3,
    },
    '30_Medium': {
      fontFamily: Fonts.FONT_FAMILY_MEDIUM,
      fontSize: Size.h3,
    },
    '30_SemiBold': {
      fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
      fontSize: Size.h3,
    },
    '30_Bold': {
      fontFamily: Fonts.FONT_FAMILY_BOLD,
      fontSize: Size.h3,
    },
    '30_ExtraBold': {
      fontFamily: Fonts.FONT_FAMILY_EXTRABOLD,
      fontSize: Size.h3,
    },
};
