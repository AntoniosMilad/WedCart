import {Text, View, TextStyle as TextSystem} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import useAppTheme from 'Hooks/theme/useAppTheme';
import {Color} from 'Theme';
import color, {darkColor, lightPalette} from 'Theme/color';
import {useRTL} from 'Hooks/useRTL';
import { TextStyle } from './Typography.system';

interface TypographyTextProps {
  type: keyof typeof TextStyle;
  content: string;
  color: Color;
  styles?: TextSystem;
}

const TypographyText = (props: TypographyTextProps) => {
  const {t} = useTranslation('translation');
  const {isDarkMode} = useAppTheme();
  const {textDir} = useRTL();
  return (
    <Text
      style={[
        TextStyle[props.type],
        props.styles,
        {
          color: isDarkMode
            ? darkColor()[props.color]
            : color[props.color as keyof typeof lightPalette],
        },
        textDir,
      ]}>
      {t(props.content)}
    </Text>
  );
};

export default TypographyText;
