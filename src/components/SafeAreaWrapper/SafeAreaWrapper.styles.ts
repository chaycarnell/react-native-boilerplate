import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

export const SafeAreaStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    style: {
      flex: 1,
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingBottom: insets.bottom,
      paddingRight: insets.right,
      backgroundColor: '#FFF',
    },
  });
