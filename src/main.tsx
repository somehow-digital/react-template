import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'virtual:uno.css';
import Application from './application.tsx';

createRoot(document.querySelector('#root')!).render(
	<StrictMode>
		<Application />
	</StrictMode>,
);
