import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './Example.styles';

interface Props {
  wrapperColor?: string;
  labelColor?: string;
  label?: string | null;
}

const Render = ({
  wrapperColor = '#0f62fe',
  labelColor = '#FFF',
  label = '',
}: Props) => (
  <View style={[styles.wrapper, {backgroundColor: wrapperColor}]}>
    <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
  </View>
);

export default Render;
