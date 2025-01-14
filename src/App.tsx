import {NavigationContainer} from '@react-navigation/native';
import Screens from '@src/screens';
import {applyStateListeners} from '@src/utils/activity';
import {
  applyDeepLinkListener,
  checkUniversalLinkState,
} from '@src/utils/linking';
import {applyBackHandleListener, navigation} from '@src/utils/navigation';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  // Handle on app launch handlers here
  useEffect(() => {
    const appStateListener = applyStateListeners();
    const linkingListener = applyDeepLinkListener();
    const backListener = applyBackHandleListener();
    checkUniversalLinkState();
    RNBootSplash.hide({fade: true});
    return () => {
      linkingListener.remove();
      appStateListener.remove();
      backListener.remove();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" backgroundColor="#FFF" />
      <NavigationContainer ref={navigation}>
        <Screens />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
