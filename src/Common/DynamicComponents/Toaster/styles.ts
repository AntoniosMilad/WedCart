import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {color} from 'Theme';

export const styles = StyleSheet.create({
  toasterContainer: {
    flexDirection: 'row',
    padding: moderateScale(16),
    borderRadius: 8,
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.white,
  },
  toasterContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toasterMessage: {
    paddingLeft: moderateScale(20),
    flex: 1,
  },
  header: {
    fontWeight: '600',
    textAlign: 'left',
    fontSize: scale(16),
  },
  message: {
    fontWeight: '400',
    textAlign: 'auto',
    fontSize: scale(14),
  },
  image: {
    width: moderateScale(50),
    height: moderateScale(50),
  },
  toasterClose: {
    color: color.black,
    padding: moderateScale(8),
  },
  errorContainer: {
    borderColor: color.greenBlue_Two,
    borderWidth: 1,
  },
  successContainer: {
    borderColor: color.success,
    borderWidth: 1,
  },
});
