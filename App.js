import React from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';
import RoutesManager from './routes/RoutesManager';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createTheme({
  Button: {
    raised: true,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RoutesManager />
      </ThemeProvider>
    </Provider>
  );
}
