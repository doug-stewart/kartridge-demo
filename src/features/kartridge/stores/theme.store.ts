import { createStore } from '@xstate/store';

export const themeStore = createStore({
    context: {
        a: '#52f8d4',
        b: '#da00ff',
        c: '#ffffff',
        d: '#1a0a2a',
        e: '#ffffff',
        f: '#7bffbf',
    },
    on: {
        a: { a: (_, event: { color: string }) => event.color },
        b: { b: (_, event: { color: string }) => event.color },
        c: { c: (_, event: { color: string }) => event.color },
        d: { d: (_, event: { color: string }) => event.color },
        e: { e: (_, event: { color: string }) => event.color },
        f: { f: (_, event: { color: string }) => event.color },
    },
});
