import { seo } from 'wix-seo';

// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world
import { seo } from 'wix-seo';
import wixWindow from 'wix-window';
import { fetch } from 'wix-fetch';

$w.onReady(function () {


    // Decorative background image
    $w('#backgroundTexture').alt = '';

    // Default SEO meta tags
    seo.setTitle('Kokomo Art Association');
    seo.setDescription('Official site for the Kokomo Art Association featuring exhibitions, workshops, and community events.');

    applyGlobalStyles();
    optimizeLinks();
});

async function applyGlobalStyles() {
    try {
        const response = await fetch('styles.css');
        const css = await response.text();
        wixWindow.rendering.addHtml(`<style>${css}</style>`, { target: 'head' });
    } catch (err) {
        console.error('Unable to load custom styles', err);
    }
}

function optimizeLinks() {
    $w('Link').forEach((link) => {
        const url = link.link || '';
        if (url.startsWith('http')) {
            if (url.includes('kokomoartassociation')) {
                link.target = '_self';
            } else {
                link.target = '_blank';
            }
        }
    });
}

