import {Example} from '@src/components';
import {useFocusEffect} from '@react-navigation/native';
import {ScreenNames} from '@src/types';
import {logger} from '@src/utils/logger';
import {navigate} from '@src/utils/navigation';
import React from 'react';
import {TouchableHighlight, View} from 'react-native';

import {styles} from './Dashboard.styles';

const Render = () => {
  useFocusEffect(() => {
    logger.info(`Logging ${ScreenNames.DASHBOARD} screen focus event!`);
  });

  return (
    <View style={styles.wrapper}>
      <TouchableHighlight
        testID="DashboardNavigationButton"
        onPress={() => navigate(ScreenNames.SECONDARY)}>
        <Example
          wrapperColor="#007d79"
          labelColor="#FFF"
          label={'Dashboard - tap to navigate'}
        />
      </TouchableHighlight>
    </View>
  );
};

export default Render;
