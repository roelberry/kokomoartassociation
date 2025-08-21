import { seo } from 'wix-seo';

// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world
import { seo } from 'wix-seo';

$w.onReady(function () {
    // Write your JavaScript here

    // Decorative flourish
    $w('#aboutDivider').alt = '';

    // SEO metadata
    seo.setTitle('About Us | Kokomo Art Association');
    seo.setDescription('Learn about the mission and history of the Kokomo Art Association.');
});

