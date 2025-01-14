import React from 'react';
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';

import {styles} from './Example.styles';

interface Props {
  wrapperColor: string;
  labelColor: string;
  label: string | null;
  textStyle?: StyleProp<TextStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
}

const Render = ({
  wrapperColor = '#0f62fe',
  labelColor = '#FFF',
  label = '',
  textStyle,
  wrapperStyle,
}: Props) => (
  <View style={[styles.wrapper, {backgroundColor: wrapperColor}, wrapperStyle]}>
    <Text style={[styles.label, {color: labelColor}, textStyle]}>{label}</Text>
  </View>
);

export default Render;
