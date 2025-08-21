import { seo } from 'wix-seo';

// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world
import { seo } from 'wix-seo';

$w.onReady(function () {


    // Decorative background image
    $w('#backgroundTexture').alt = '';

    // Default SEO meta tags
    seo.setTitle('Kokomo Art Association');
    seo.setDescription('Official site for the Kokomo Art Association featuring exhibitions, workshops, and community events.');
});

