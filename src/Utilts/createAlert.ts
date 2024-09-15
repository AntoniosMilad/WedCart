import {Alert} from 'react-native';

interface CreateAlert {
  title: string;
  description: string;
  okAction?: () => void;
  cancelAction?: () => void;
}

const createAlert = (
  title: string,
  description: string,
  okAction?: {okAction: () => void; text: string},
  cancelActions?: {cancelAction: () => void; text: string},
): void => {
  Alert.alert(title, description, [
    {
      text: cancelActions?.text || 'Cancel',
      onPress: cancelActions?.cancelAction,
      style: 'cancel',
    },
    {text: okAction?.text || 'ok', onPress: okAction?.okAction},
  ]);
};

export default createAlert;
