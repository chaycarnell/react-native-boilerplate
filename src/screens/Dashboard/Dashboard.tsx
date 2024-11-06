import {Example} from '@components';
import {useFocusEffect} from '@react-navigation/native';
import {ScreenNames} from '@types';
import {logger} from '@utils/logger';
import {navigate} from '@utils/navigation';
import React from 'react';
import {TouchableHighlight, View} from 'react-native';

import {DashboardViewStyles} from './Dashboard.styles';

const Render = () => {
  useFocusEffect(() => {
    logger.info(`Logging ${ScreenNames.DASHBOARD} screen focus event!`);
  });

  return (
    <View style={DashboardViewStyles}>
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
