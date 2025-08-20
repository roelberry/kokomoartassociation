// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world
import { seo } from 'wix-seo';

$w.onReady(function () {
    // Ensure all images have descriptive alt text
    $w('Image').forEach((image) => {
        if (typeof image.alt !== 'string' || image.alt.trim() === '') {
            image.alt = 'Artwork or event image from the Kokomo Art Association';
        }
    });

    // Provide alt text for key site images
    $w('#siteLogo').alt = 'Kokomo Art Association logo';

    // Decorative background image
    $w('#backgroundTexture').alt = '';

    // Default SEO meta tags
    seo.setTitle('Kokomo Art Association');
    seo.setDescription('Official site for the Kokomo Art Association featuring exhibitions, workshops, and community events.');
});

