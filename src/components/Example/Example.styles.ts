import {StyleSheet} from 'react-native';
import {s} from '@src/utils/scale';

export const styles = StyleSheet.create({
  wrapper: {
    height: s(406),
    width: s(375),
    opacity: 1,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
