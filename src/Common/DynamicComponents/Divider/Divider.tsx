import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {color} from 'Theme';
import {Color, darkColor, darkPalette, lightPalette} from 'Theme/color';
import useAppTheme from 'Hooks/theme/useAppTheme';

interface DividerProps {
  color?: Color;
}

const Divider = (props: DividerProps) => {
  const {isDarkMode} = useAppTheme();

  return (
    <View
      style={[
        styles.dividerStyle,
        {
          backgroundColor: props.color
            ? isDarkMode
              ? darkColor()[props.color]
              : color[props.color]
            : color.black,
        },
      ]}
    />
  );
};

export default Divider;
