import { createStore } from '@xstate/store';

export const themeStore = createStore({
    context: { a: '#52f8d4', b: '#da00ff', c: '#ffffff', d: '#1a0a2a', e: '#ffffff', f: '#7bffbf' },
    on: {
        a: (context, event: { color: string }) => ({ ...context, a: event.color }),
        b: (context, event: { color: string }) => ({ ...context, b: event.color }),
        c: (context, event: { color: string }) => ({ ...context, c: event.color }),
        d: (context, event: { color: string }) => ({ ...context, d: event.color }),
        e: (context, event: { color: string }) => ({ ...context, e: event.color }),
        f: (context, event: { color: string }) => ({ ...context, f: event.color }),
    },
});
