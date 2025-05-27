import '../styles/styles.css';
import '../styles/responsives.css';
import 'tiny-slider/dist/tiny-slider.css';
import 'leaflet/dist/leaflet.css';

import App from './pages/app';
import Camera from './utils/camera';
import { registerServiceWorker } from './utils';

document.addEventListener('DOMContentLoaded', async () => {
    const app = new App({
        content: document.querySelector('#main-content'),
        drawerButton: document.querySelector('#drawer-button'),
        navigationDrawer: document.querySelector('#navigation-drawer'),
        skipLinkButton: document.querySelector('#skip-link'),
    });
    await app.renderPage();
    await registerServiceWorker();

    console.log('Berhasil mendaftarkan service worker.');

    window.addEventListener('hashchange', async () => {
        await app.renderPage();

        Camera.stopAllStreams();
    });
});
