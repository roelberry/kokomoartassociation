// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world
import { seo } from 'wix-seo';

$w.onReady(function () {
    // Provide descriptive alt text for images on this page
    $w('Image').forEach((img) => {
        if (img.alt === 'Artwork or event image from the Kokomo Art Association') {
            img.alt = 'Kokomo Art Association event photo';
        }
    });

    // Enhance SEO with page-specific metadata
    seo.setTitle('Upcoming Art Events | Kokomo Art Association');
    seo.setDescription('Browse art events, classes, and workshops hosted by the Kokomo Art Association.');
});
