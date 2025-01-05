import React from 'react';

import AppFrame from '../components/AppFrame';
import AppHeader from '../components/AppHeader';
import AppNavigation from '../components/AppNavigation';
import AppTheme from '../components/AppTheme';
import { PodsProvider } from '../contexts/StorefrontContext';
import { ThemeProvider } from '../contexts/ThemeContext';

import GamePage from './GamePage';
import '../styles/kartridge.scss';

export const Kartridge = () => {
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
