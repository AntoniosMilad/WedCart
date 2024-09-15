import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {ReactElement} from 'react';
import {color} from 'Theme';
import styles from './styles';
import TypographyText from '../Typography/TypographyText';
import { lightPalette } from 'Theme/color';
import { TextStyle as TextFont } from '../Typography/Typography.system';

type AppButtonProps = TouchableOpacityProps & {
  title: string;
  outlined?: boolean;
  icon?: ReactElement;
  disabled?: boolean;
  onPress: () => void;
  customStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  size: 'small' | 'large';
  leftIcon?: boolean;
  rightIcon?: boolean;
  loading?: boolean;
  textColor: keyof typeof lightPalette;
  textType: keyof typeof TextFont
};

const AppButton: React.FC<AppButtonProps> = ({
  title = 'Default Title',
  customStyle,
  size = 'small',
  disabled = false,
  icon,
  outlined = false,
  buttonTextStyle,
  leftIcon = false,
  loading = false,
  rightIcon = false,
  textColor,
  textType,
  onPress,
  ...rest
}) => {
  const onPressHandler = () => {
    if (!disabled && !loading && onPress) {
      onPress();
    }
  };
  const iconColor =
    outlined && disabled
      ? color.disabled
      : outlined
      ? color.americanSilver
      : color.white;

  const renderTitle = () => {
    if (loading) {
      return <ActivityIndicator size="small" color={iconColor || 'white'} />;
    }
    return (
      <TypographyText type={textType} color={textColor} content={title}/>
    );
  };
  return (
    <TouchableOpacity
      {...rest}
      onPress={onPressHandler}
      activeOpacity={disabled || loading ? 1 : 0.5}
      style={[
        styles.btnStyle,
        {
          borderRadius: (rest.style as ViewStyle)?.borderRadius || 10,
          backgroundColor: disabled ? color.disabled : color.greenBlue_Two,
        },
        customStyle,
      ]}>
      {icon && (
        <View>
          {React.cloneElement(icon, {color: iconColor || color.white})}
        </View>
      )}
      {renderTitle()}
    </TouchableOpacity>
  );
};

export default AppButton;
