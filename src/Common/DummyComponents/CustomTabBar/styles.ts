import {Platform, StyleSheet} from 'react-native';
const isIos = Platform.OS === 'ios';

export const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    padding: isIos ? 10 : 14,
    position: 'relative',
  },
  appTabButtons: {
    height: isIos ? 50 : 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 0,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  tabItem: {
    flexDirection: 'column',
    alignItems: 'center',
    top: 2,
    gap: isIos ? 2 : 0,
    marginBottom: isIos ? 0 : 5,
    marginTop: isIos ? 5 : 0,
  },
});
