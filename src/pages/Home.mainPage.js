import { seo } from 'wix-seo';

// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world
import { seo } from 'wix-seo';

$w.onReady(function () {
    // Write your JavaScript here

    // Decorative images should have empty alt text so screen readers ignore them
    $w('#decorativeDivider').alt = '';

    // SEO metadata
    seo.setTitle('Kokomo Art Association | Home');
    seo.setDescription('Discover exhibitions, classes, and events offered by the Kokomo Art Association.');
});

