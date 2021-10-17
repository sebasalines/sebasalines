import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Presentation } from './components/Presentation';

const appTheme = {
  colors: {
    primary: '#322E2E',
    secondary: '#3F3939',
    white: '#FFFFF6',
    lowContrast: '#fffff6b4',
    grey: '#fffff669',
  },
  font: {
    body: 'Hind',
    fancy: 'Rozha One',
  },
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Presentation />
    </ThemeProvider>
  );
}

export default App;
