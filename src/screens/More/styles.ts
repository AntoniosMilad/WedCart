import {useRTL} from 'Hooks/useRTL';
import {StyleSheet} from 'react-native';
import {typography} from 'Theme';
const {textDir} = useRTL();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,
  },
  navigation: {
    flex: 2,
    backgroundColor: 'red',
  },
  body: {
    alignItems: 'center',
    width: '100%',
    gap: 15,
  },
  footer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  headerWaseetText: {
    fontSize: 24,
    fontFamily: typography.notoBold,
    ...textDir,
  },
  userWelcome: {alignItems: 'flex-start', paddingHorizontal: 15},
});
