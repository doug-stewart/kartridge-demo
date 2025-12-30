import { createStore } from '@xstate/store';

export const themeStore = createStore({
    context: { a: '#52f8d4', b: '#da00ff', c: '#ffffff', d: '#1a0a2a', e: '#ffffff', f: '#7bffbf' },
    on: {
        a: (_: unknown, event: { color: string }) => ({ a: event.color }),
        b: (_: unknown, event: { color: string }) => ({ b: event.color }),
        c: (_: unknown, event: { color: string }) => ({ c: event.color }),
        d: (_: unknown, event: { color: string }) => ({ d: event.color }),
        e: (_: unknown, event: { color: string }) => ({ e: event.color }),
        f: (_: unknown, event: { color: string }) => ({ f: event.color }),
    },
});
