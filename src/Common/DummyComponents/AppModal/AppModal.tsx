import {color} from 'Theme';
import React, {FC} from 'react';
import {Modal, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './AppModal.styles';
import {AppModalProps} from './AppModal.types';

const AppModal: FC<AppModalProps> = ({visible, children}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>{children}</View>
      </View>
      <LinearGradient colors={[color.gray, color.black]} style={styles.overlay}>
        <View />
      </LinearGradient>
      
    </Modal>
  );
};

export default AppModal;
