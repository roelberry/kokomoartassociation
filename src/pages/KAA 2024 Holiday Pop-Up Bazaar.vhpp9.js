// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world
import { seo } from 'wix-seo';

$w.onReady(function () {
    const schemaObject = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'KAA 2024 Holiday Pop-Up Bazaar',
        startDate: '2024-12-01',
        endDate: '2024-12-02',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
            '@type': 'Place',
            name: 'Kokomo Art Center'
        },
        organizer: {
            '@type': 'Organization',
            name: 'Kokomo Art Association',
            url: 'https://www.kokomoart.org'
        }
    };
    seo.setCustomMetaTags([{ tagName: 'script', attributes: { type: 'application/ld+json' }, content: JSON.stringify(schemaObject) }]);

    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
