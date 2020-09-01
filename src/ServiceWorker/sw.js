import { handleMessageFromClient } from './Utilities/messageHandler';
import setupWorkbox from './setupWorkbox';
import registerRoutes from './registerRoutes';
import registerMessageHandlers from './registerMessageHandlers';

setupWorkbox();

registerRoutes();

registerMessageHandlers();



self.addEventListener('message', e => {
    const { type, payload } = e.data;

    handleMessageFromClient(type, payload, e);
});




// self.addEventListener('activate', function(event) {
//     event.waitUntil(
//       caches.keys().then(function(cacheNames) {
//         return Promise.all(
//           cacheNames.filter(function(cacheName) {
//             // Return true if you want to remove this cache,
//             // but remember that caches are shared across
//             // the whole origin
//           }).map(function(cacheName) {
//             return caches.delete(cacheName);
//           })
//         );
//       })
//     );
//   });
