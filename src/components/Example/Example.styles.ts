import {s, vs} from '@src/utils/scale';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export const Wrapper = (color: string): StyleProp<ViewStyle> => ({
  height: vs(406),
  width: s(375),
  backgroundColor: color,
  opacity: 1,
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
});

export const Label = (color: string): StyleProp<TextStyle> => ({
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  color,
});
