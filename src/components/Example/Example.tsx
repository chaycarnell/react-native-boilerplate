import React from 'react';
import {Text, View} from 'react-native';

import {Label, Wrapper} from './Example.styles';

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
  <View style={Wrapper(wrapperColor)}>
    <Text style={Label(labelColor)}>{label}</Text>
  </View>
);

export default Render;
