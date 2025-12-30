import { create } from 'zustand';
import { ThemeState } from '../types';

export const useThemeStore = create<ThemeState>((set) => ({
    a: '#52f8d4',
    b: '#da00ff',
    c: '#ffffff',
    d: '#1a0a2a',
    e: '#ffffff',
    f: '#7bffbf',
    setTheme: (key, color) => set((state) => ({ ...state, [key]: color })),
}));
