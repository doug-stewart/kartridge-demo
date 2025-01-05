import React, { Component } from 'react';
import { render } from 'react-dom';
import AppTheme from './components/shared/AppTheme';
import AppHeader from './components/shared/AppHeader';
import AppNavigation from './components/shared/AppNavigation';
import { ThemeProvider } from './contexts/ThemeContext';
import { ModalProvider } from './contexts/ModalContext';
import GamePage from './GamePage';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <AppTheme />
        <div className="ap-frame is-authentic is-app r-upload sr-customize">
          <ModalProvider>
            <AppHeader />
            <AppNavigation />
            <div className="ap-content">
              <main className="ap-main">
                <GamePage />
              </main>
            </div>
          </ModalProvider>
        </div>
      </ThemeProvider>
    )
  }
}

render(<App />, document.getElementById('root'));