import React from 'react';
import { PodsProvider } from './contexts/StorefrontContext';
import { ThemeProvider } from './contexts/ThemeContext';
import AppFrame from './components/shared/AppFrame';
import AppTheme from './components/shared/AppTheme';
import AppHeader from './components/shared/AppHeader';
import AppNavigation from './components/shared/AppNavigation';
import GamePage from './GamePage';
import './App.scss';

const App = () => {
  return (
    <PodsProvider>
      <ThemeProvider>
        <AppTheme />
        <AppFrame>
          <AppHeader />
          <AppNavigation />
          <div className="ap-content">
            <main className="ap-main">
              <GamePage />
            </main>
          </div>
        </AppFrame>
      </ThemeProvider>
    </PodsProvider>
  );
};

export default App;
