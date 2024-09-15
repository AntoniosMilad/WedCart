import {useRTL} from 'Hooks/useRTL';
import {StyleSheet, Platform} from 'react-native';
import {color, typography} from 'Theme';

const {isRTL} = useRTL();

/**
 * component style lives here
 */
const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',

    minHeight: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    color: color.light,
    fontFamily: typography.bold,
  },
});

/**
 * button theme
 */
export const theme = {
  colors: {
    /**
     * for ripple color in android
     */
    primary: color.pinkishGrey,
  },
};

export default styles;
