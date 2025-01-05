import { HttpResponse, http } from 'msw';

const svgMock = http.get('file.svg', () => HttpResponse.json({ data: '<svg></svg>' }));

export const handlers = [svgMock];
