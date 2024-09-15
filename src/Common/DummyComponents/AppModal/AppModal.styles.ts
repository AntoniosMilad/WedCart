import {color, layout, typography, normalizeFont} from 'Theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 30,
  },
  modal: {
    borderRadius: 20,
    backgroundColor: color.white,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,

    opacity: 0.6,
  },
});
