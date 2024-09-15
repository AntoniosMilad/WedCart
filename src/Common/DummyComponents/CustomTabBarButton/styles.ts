import {StyleSheet,Platform} from 'react-native';
import {color, typography} from 'Theme';

const isIos = Platform.OS === 'ios';

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '50%',
    marginHorizontal: 'auto',
    bottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius:200,
  },



  container: {
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: isIos ? -55 : -45,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 0,
  },
  buttonStyle: {
    width: 56,
    height: 56,
    borderRadius: 50,
    backgroundColor: color.greenBlue_Two,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
