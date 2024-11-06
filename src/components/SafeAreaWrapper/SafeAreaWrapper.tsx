import React, {PropsWithChildren} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SafeAreaStyles} from './SafeAreaWrapper.styles';
import {View} from 'react-native';

const Render = ({children}: PropsWithChildren) => {
  const insets = useSafeAreaInsets();
  console.log(insets);
  return <View style={SafeAreaStyles(insets).style}>{children}</View>;
};

export default Render;
