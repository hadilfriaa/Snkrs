import { DefaultTheme } from '@react-navigation/native';

const lightTheme = DefaultTheme;

const darkTheme = DefaultTheme;
darkTheme.colors.background = '#5F5F5F';
lightTheme.colors.background = '#ffffff';

  
export { lightTheme, darkTheme }