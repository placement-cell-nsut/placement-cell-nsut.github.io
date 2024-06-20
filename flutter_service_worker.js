'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"tnplogo.png": "30987e6c5729974725591649d749308c",
"index.html": "0a4719894797844eb0ebcd506e51ebd2",
"/": "0a4719894797844eb0ebcd506e51ebd2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"manifest.json": "88d5a340f32c26313f598a8f2aed6b0e",
"assets/Kaleidoscope.gif": "46b68b6e36c9b274cdbc4dba8b34365f",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/assets/images/Blackrock.png": "56bcf7f3b3d32943c7214e54f2364413",
"assets/assets/images/Zomato.png": "50ccfb32ad78dab886bd82da350c60f5",
"assets/assets/images/McKinsey.png": "966a96341da21c5bdf8d61d10ac58081",
"assets/assets/images/Winzo.png": "418ff2b5528444364cec9fa3f0ea9dbb",
"assets/assets/images/Apple%2520Inc..png": "2d4b6754f44a2d287e8be02970d04bf4",
"assets/assets/images/nsut-logo.png": "26eb6de4e3f200534f8288ab5b24eb8c",
"assets/assets/images/IBM.png": "af62bd98926fbe65cf3e27708aef5938",
"assets/assets/images/Google.png": "3e26049d9396f49912688a986b4027b8",
"assets/assets/images/Microsoft.png": "995acfd23e7a6539b64a540f73d84b79",
"assets/assets/images/ProcDNA.png": "5ace28565d2a5932d66619e29fbe742d",
"assets/assets/images/Samagra.png": "b5bb73a7d3c2b1905ed12990dfecb30a",
"assets/assets/images/Estee.png": "99a635f7b39578c37bfb6fed972b7dc9",
"assets/assets/images/Intuit.png": "7f574573a6c5ea84e43d0d05cf3089bb",
"assets/assets/images/Morgan%2520Stanley.png": "3aef6c069e0bd4aec0281da1887a13f2",
"assets/assets/images/Sprinklr.png": "c944a9b349799992ae59cf10a7bc6ffe",
"assets/assets/images/Amazon.png": "6acb542bfb1363a23c82cf6b82cbd83a",
"assets/assets/images/Unicommerce.png": "11db47190cc7fea7f916a32ffc58dd9e",
"assets/assets/icons/excel_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/users.svg": "3c66079f6a558edb2bd13e748ee0780c",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/mba.svg": "24cbe25ed91217e1f99452556b907428",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/bdesign.svg": "ff0ff2a6f4706d4a53e92a1b10f58227",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/mtech.svg": "ceadab84828ca99180ced0fbb3dc2362",
"assets/assets/icons/folder-download.svg": "6d82ec0cf36c32b23382df4cfb637750",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/bba.svg": "4640da433f69a2c1fb252bfa8f85d891",
"assets/assets/icons/notes-edit.svg": "87a9490a5bdf5581111eaa384808d6cd",
"assets/assets/icons/msc.svg": "50674a0de11e090f5aeb420f03d67c27",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/student.svg": "46cc383dfa98aea5fbbc6b628ec71f7c",
"assets/assets/icons/bsc.svg": "1583164dfc88fd3ae67b3e2180b408fe",
"assets/assets/icons/announcement.svg": "9fae12a4ebbb7d4a14d592ebc63c2b7b",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/calendar.svg": "30a507d018b981d479732e0e70f61e8b",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/attachment.svg": "01700e3f65c9790ca20144c1e7b241c5",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/notes-edit-add.svg": "bef1023d5611a0e1edb1c0f2a39a2664",
"assets/assets/icons/apps.svg": "afa3e903a6cc800d232029d2a397e882",
"assets/assets/icons/menu_dashboard.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/btech.svg": "511f0ecb81f5cc7191e4dd201089d61d",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/mail.svg": "417f12fdd58c40dab20ebc66f1d26ea0",
"assets/assets/icons/file-pdf.svg": "181668ac00f9c2c671b39dd309d6c4bb",
"assets/AssetManifest.json": "2b2cc7f89e1f2fc8f541567263a710db",
"assets/fonts/MaterialIcons-Regular.otf": "e98da5a059dfeb6536f4878c5d268171",
"assets/AssetManifest.smcbin": "69f7a9ce99f6caecaa1e9e8e3f9acb7b",
"assets/NOTICES": "6a9f240cbed904c2c4dcd25f8ce04c1a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "9f9cbb400ca9e5d449968d9b44c421d2",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"main.dart.js": "95f74c683334f27f7762aaaefa68f3f5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
