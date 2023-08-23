import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { useState } from 'react';
import { light } from './Theme/Theme';

import AppRoutes from './Routes/Routes';

import Layout from './Layout/Layout';


export const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(light);
  const handleThemeChange = theme => setSelectedTheme(theme);
  return (
    <ThemeProvider theme={selectedTheme || light}>
      <GlobalStyles />

      <Layout handleThemeChange={handleThemeChange}>
        <AppRoutes/>
      </Layout>
    </ThemeProvider>
  );
};
