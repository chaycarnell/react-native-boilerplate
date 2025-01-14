import {ScreenNames} from './enums';

export type RootStackParamList = {
  [ScreenNames.DASHBOARD]: {};
  [ScreenNames.SECONDARY]: {};
};

export type ScreenName = (typeof ScreenNames)[keyof typeof ScreenNames];
