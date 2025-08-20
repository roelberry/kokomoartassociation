import { seo } from 'wix-seo';

// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    seo.setSeoTags({
        title: 'Kokomo Art Center',
        description: 'Explore the Kokomo Art Center page at the Kokomo Art Association.'
    });


    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
