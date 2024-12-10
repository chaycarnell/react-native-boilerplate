import {NavigationContext} from '@react-navigation/native';
import {cleanup, fireEvent, render} from '@testing-library/react-native';
import {ScreenNames} from '@src/types';
import * as NavModule from '@src/utils/navigation';
import React from 'react';

import DashboardScreen from './Dashboard';

afterEach(cleanup);

describe('Dashboard screen', () => {
  describe('given default props', () => {
    let navSpy;
    let renderedComponent;

    const navContext = {
      isFocused: () => true,
      addListener: jest.fn(() => jest.fn()),
    };

    beforeEach(() => {
      navSpy = jest.spyOn(NavModule, 'navigate').mockImplementation(jest.fn);
      renderedComponent = render(
        <NavigationContext.Provider value={navContext}>
          <DashboardScreen />
        </NavigationContext.Provider>,
      );
    });

    afterEach(() => {
      navSpy.mockRestore();
    });

    it('should render correctly', () => {
      const {toJSON} = renderedComponent;
      expect(toJSON()).toMatchSnapshot();
    });

    it('should navigate to dashboard page when touchable highlight is selected', () => {
      const {getByTestId} = renderedComponent;
      fireEvent.press(getByTestId('DashboardNavigationButton'));
      expect(NavModule.navigate).toHaveBeenCalledWith(ScreenNames.SECONDARY);
    });
  });
});
