import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Kartridge } from './features/kartridge/routes/Kartridge';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Kartridge />
    </StrictMode>,
);
