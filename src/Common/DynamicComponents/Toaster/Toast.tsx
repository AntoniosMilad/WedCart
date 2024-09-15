import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Toast, {ToastConfig} from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import {TFunction} from 'i18next';

const allStatus = (t: TFunction<'translation'>) => ({
  success: {
    icon: require('../../../assets/images/svg/toaster/success.png'),
    header: t('successfully'),
  },
  error: {
    icon: require('../../../assets/images/svg/toaster/error.png'),
    header: t('wentWrong'),
  },
});
enum ToastVariant {
  SUCCESS = 'success',
  ERROR = 'error',
}

interface HomzToastProps {
  variant: ToastVariant;
  message: string;
}

const handleHideToast = () => {
  Toast.hide();
};

const toastConfig: ToastConfig = {
  waseet: ({props}: {props: HomzToastProps}) => {
    const {t} = useTranslation('translation');

    const status = allStatus(t);

    return (
      <View
        style={[
          styles.toasterContainer,
          props.variant === 'success'
            ? styles.successContainer
            : styles.errorContainer,
        ]}>
        <View style={styles.toasterContent}>
          {status[props.variant].icon ? (
            <Image
              source={status[props.variant].icon}
              style={[styles.image, {objectFit: 'contain'}]}
            />
          ) : null}

          <View style={styles.toasterMessage}>
            {/* <Text style={styles.header}>{status[props.variant].header}</Text> */}
            <Text style={styles.message}>{t(props.message)}</Text>
          </View>

          <TouchableOpacity
            style={styles.toasterClose}
            onPress={handleHideToast}>
            <Icon name="close" size={16} style={styles.toasterClose} />
          </TouchableOpacity>
        </View>
      </View>
    );
  },
};

export default toastConfig;
