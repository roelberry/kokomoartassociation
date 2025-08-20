import { seo } from 'wix-seo';

// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    seo.setSeoTags({
        title: 'Painting with Ramona',
        description: 'Explore the Painting with Ramona page at the Kokomo Art Association.'
    });


    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
