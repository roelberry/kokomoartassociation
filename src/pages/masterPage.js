import { seo } from 'wix-seo';

// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    seo.setSeoTags({
        title: 'masterPage',
        description: 'Explore the masterPage page at the Kokomo Art Association.'
    });


    // Write your JavaScript here

    // Decorative background image
    $w('#backgroundTexture').alt = '';
});

