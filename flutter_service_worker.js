'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/android_icon.png": "038ea15b40a395099451862327ebcfc1",
"assets/app_store.png": "0c6a804a625b96b25de0bad1ad44f0fe",
"assets/AssetManifest.bin": "4b34a5dd2f6c4e7a22ab0bf5e90d36b5",
"assets/AssetManifest.bin.json": "e7243f2f6bd6747b44ac3054a674a9eb",
"assets/AssetManifest.json": "33c34231e8b603705951aa8c56c9ed9c",
"assets/assets/android_icon.png": "038ea15b40a395099451862327ebcfc1",
"assets/assets/app_store.png": "0c6a804a625b96b25de0bad1ad44f0fe",
"assets/assets/cap.png": "4808e55c3a5966c519cf2de20408e735",
"assets/assets/css3.png": "b1bd0673d70ccee89e1457bd71554759",
"assets/assets/dart.png": "1a089616e2be1ac7c5188c00225772c8",
"assets/assets/desktop_icon.png": "e0e90a080a776fd1da23f5a249b5ce3c",
"assets/assets/docker.png": "722cafb6c71b44bba6292a603b2e198c",
"assets/assets/facebook.png": "fa74fe1619d75d68df1f0db7c654e39a",
"assets/assets/flutter.png": "abe34b0551ded954f6759cada7807e3e",
"assets/assets/github.png": "7aed3646cbea181a3da85620809e992c",
"assets/assets/html5.png": "9d5b22bfe74ac513d5cd33563908ae71",
"assets/assets/hugo.png": "6c341d7823570ab705c940f1dea993ef",
"assets/assets/instagram.png": "02c7721e097a6bb001d00fa61750bc81",
"assets/assets/ios_icon.png": "4b8039e8a442657c7b9b379322eb2793",
"assets/assets/javascript.png": "ab8e2beca091db2345ff66a5cc432985",
"assets/assets/job_bag.png": "abcee1acfad0ef4987771ef6d97e1266",
"assets/assets/linkedin.png": "e4d142586676a80b3927d899d3584148",
"assets/assets/mockup_putet.webp": "9aca29f1f81896d86074c724931dc293",
"assets/assets/mockup_sfu.webp": "87cbf8d7627b3cfb6931f2b410216f69",
"assets/assets/mockup_sfx.webp": "a4433a4b95888b0965b7d28a2658c08f",
"assets/assets/my_flutter_avatar.png": "a6fc0bb5fb8f7c50d06b283332eaa57c",
"assets/assets/play_store.png": "57f589f06bed5636a8cbffa756e83f1a",
"assets/assets/profile.jpg": "2d1e4522828ead533cc3516b1df80e31",
"assets/assets/projects/02.png": "cf8468132005ef5442c5857705e39c40",
"assets/assets/projects/03.png": "9dd85f5710c01486dc5937733a22d9eb",
"assets/assets/projects/04.png": "8e2a233d5e7b9930407e3cccf54b6799",
"assets/assets/projects/05.png": "e2cc840dbaaf91e6acba1d9d44ae502f",
"assets/assets/projects/06.png": "11a36375edc4b5ba6956bdeed286f733",
"assets/assets/projects/1.png": "1f59be4af5fe374b4e3f5f6afdb3a24c",
"assets/assets/projects/w01.png": "b1256ae160f9170ab36ce78ee7a4dc2d",
"assets/assets/projects/w02.png": "f3168876c62cbf02cb9ff94640383f96",
"assets/assets/projects/w03.jpeg": "81f24b685fd3f214e409fd29217c1235",
"assets/assets/python.png": "e04382338533c6bb0dcfc7a48bf86502",
"assets/assets/sfux.png": "efeec50253e435f9e4cd8175a73f6a18",
"assets/assets/sf_learn.png": "a633888192856fe862020262d562cee6",
"assets/assets/swift.png": "d2801ddcbaa44beba47d47d2e6feadf7",
"assets/assets/telegram.png": "d940cd7b5e7b66510b59785177c6414f",
"assets/assets/thihasoe.jpg": "7f4dbd50c103397851dcd421ebf5c4cc",
"assets/assets/waso.webp": "a7a3ac5effb235def6ab00f4562b0f8e",
"assets/assets/web_icon.png": "8867144689b70d099377ee3c4ab1baa0",
"assets/cap.png": "4808e55c3a5966c519cf2de20408e735",
"assets/css3.png": "b1bd0673d70ccee89e1457bd71554759",
"assets/dart.png": "1a089616e2be1ac7c5188c00225772c8",
"assets/desktop_icon.png": "e0e90a080a776fd1da23f5a249b5ce3c",
"assets/docker.png": "722cafb6c71b44bba6292a603b2e198c",
"assets/facebook.png": "fa74fe1619d75d68df1f0db7c654e39a",
"assets/flutter.png": "abe34b0551ded954f6759cada7807e3e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6d56e462f64b45e9a96000227d5b25ab",
"assets/github.png": "7aed3646cbea181a3da85620809e992c",
"assets/html5.png": "9d5b22bfe74ac513d5cd33563908ae71",
"assets/hugo.png": "6c341d7823570ab705c940f1dea993ef",
"assets/instagram.png": "02c7721e097a6bb001d00fa61750bc81",
"assets/ios_icon.png": "4b8039e8a442657c7b9b379322eb2793",
"assets/javascript.png": "ab8e2beca091db2345ff66a5cc432985",
"assets/job_bag.png": "abcee1acfad0ef4987771ef6d97e1266",
"assets/linkedin.png": "e4d142586676a80b3927d899d3584148",
"assets/mockup_putet.webp": "9aca29f1f81896d86074c724931dc293",
"assets/mockup_sfu.webp": "87cbf8d7627b3cfb6931f2b410216f69",
"assets/mockup_sfx.webp": "a4433a4b95888b0965b7d28a2658c08f",
"assets/my_flutter_avatar.png": "a6fc0bb5fb8f7c50d06b283332eaa57c",
"assets/NOTICES": "6ea0d12460220a890dd1ecdca68aba9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1363b9caff60b4894d59c0757a176c31",
"assets/play_store.png": "57f589f06bed5636a8cbffa756e83f1a",
"assets/profile.jpg": "2d1e4522828ead533cc3516b1df80e31",
"assets/projects/02.png": "cf8468132005ef5442c5857705e39c40",
"assets/projects/03.png": "9dd85f5710c01486dc5937733a22d9eb",
"assets/projects/04.png": "8e2a233d5e7b9930407e3cccf54b6799",
"assets/projects/05.png": "e2cc840dbaaf91e6acba1d9d44ae502f",
"assets/projects/06.png": "11a36375edc4b5ba6956bdeed286f733",
"assets/projects/1.png": "1f59be4af5fe374b4e3f5f6afdb3a24c",
"assets/projects/w01.png": "b1256ae160f9170ab36ce78ee7a4dc2d",
"assets/projects/w02.png": "f3168876c62cbf02cb9ff94640383f96",
"assets/projects/w03.jpeg": "81f24b685fd3f214e409fd29217c1235",
"assets/python.png": "e04382338533c6bb0dcfc7a48bf86502",
"assets/sfux.png": "efeec50253e435f9e4cd8175a73f6a18",
"assets/sf_learn.png": "a633888192856fe862020262d562cee6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/swift.png": "d2801ddcbaa44beba47d47d2e6feadf7",
"assets/telegram.png": "d940cd7b5e7b66510b59785177c6414f",
"assets/thihasoe.jpg": "7f4dbd50c103397851dcd421ebf5c4cc",
"assets/waso.webp": "a7a3ac5effb235def6ab00f4562b0f8e",
"assets/web_icon.png": "8867144689b70d099377ee3c4ab1baa0",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "f7f0baefa25f715102824b4e5944a97b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf1e45747974a42ebcf850f57cc46223",
"/": "bf1e45747974a42ebcf850f57cc46223",
"main.dart.js": "264242c68610291cf67ca21af7f42201",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
