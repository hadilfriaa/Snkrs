/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/config/routes';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './src/config/theme/index'



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider theme={lightTheme} >
      <Routes />
    </ThemeProvider>
  );
};


export default App;
