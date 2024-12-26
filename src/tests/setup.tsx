import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';

import { server } from './server/server';

beforeAll(() => {
    HTMLDialogElement.prototype.show = vi.fn();
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();

    HTMLElement.prototype.scrollIntoView = vi.fn();

    server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => {
    vi.clearAllMocks();
    server.close();
});

beforeEach(() => {
    vi.mock('next/image');
    vi.mock('next/navigation');
    vi.mock('@datadog/browser-rum');
});

afterEach(() => {
    vi.resetAllMocks();
    server.resetHandlers();
});
