import {scaleHeight, scaleWidth, scaleSize} from './ScaleComponent';

export const color = {
  backgroundColor: '#17181B',
  lightColor: '#26292E',
  activeBackgorundColor: '#5A667D',
  activeTintColor: '#A0B0D0',
  inActiveTintColor: '#D6DCE6',
  mediumColor: '#27292E',
  darkColor: '#023E8A',
  borderColor: '#023E8A',
  whiteColor: 'white'
};
export const borderWidth = {
  small: 0.7,
  medium: 0.9,
  large: 1.1,
  extralarge: 1.3,
};
export const margin = {
  verysmall: 2,
  small: 8,
  medium: 10,
  large: 25,
  extralarge: 140,
};
export const fontSize = {
  small: scaleSize(16),
  medium: scaleSize(20),
  large: scaleSize(24),
  extralarge: scaleSize(26),
};
export const width = {
  verSmall: scaleWidth(25),
  small: scaleWidth(100),
  medium: scaleWidth(130),
  large: scaleWidth(160),
  extralarge: scaleWidth(250),
  full: scaleWidth(380),
};
export const height = {
  verysmall: scaleHeight(25),
  small: scaleHeight(50),
  medium: scaleHeight(70),
  large: scaleHeight(90),
  extralarge: scaleHeight(100),
};
export const padding = {
  small: 5,
  medium: 10,
  large: 12,
  extralarge: 14,
};
export const borderRadius = {
  small: 12,
  medium: 20,
  large: 24,
  extralarge: 26,
};
