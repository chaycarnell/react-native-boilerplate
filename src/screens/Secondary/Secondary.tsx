import {Example} from '@src/components';
import {ScreenNames} from '@src/types';
import {navigate} from '@src/utils/navigation';
import React from 'react';
import {TouchableHighlight, View} from 'react-native';

import {styles} from './Secondary.styles';

const Render = () => (
  <View style={styles.wrapper}>
    <TouchableHighlight
      testID="SecondaryNavigationButton"
      onPress={() => navigate(ScreenNames.DASHBOARD, {})}>
      <Example
        wrapperColor="#0f62fe"
        labelColor="#FFF"
        label={'Secondary - tap to navigate'}
      />
    </TouchableHighlight>
  </View>
);

export default Render;
