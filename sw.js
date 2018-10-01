self.addEventListener('install', function(event) {
  // Perform install steps
  var CACHE_NAME = 'hopefmc';
  var urlsToCache = [
    '/',
    '/about.html',
    '/contact.html',
    '/prices.html',
    '/services.html',
    '/staff.html',
    '/css/style.css',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://code.jquery.com/jquery-3.2.1.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js'
  ];

  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
    );
  });
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });
});
