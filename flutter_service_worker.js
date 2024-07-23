'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "735dcb92492fd49ce4a1b902e69f2474",
"assets/AssetManifest.json": "2b2cc7f89e1f2fc8f541567263a710db",
"assets/assets/icons/announcement.svg": "ae2e97f199ba85dfb79cb377e6ef1f28",
"assets/assets/icons/apps.svg": "1515c19af063fc2f68d1831f653556ec",
"assets/assets/icons/attachment.svg": "d3cb2b226a970e122cc17f581cfc924b",
"assets/assets/icons/bba.svg": "f7b3044feca3f09020d84d91c2ccf805",
"assets/assets/icons/bdesign.svg": "160d6c2d4946a4871abc827e3824498f",
"assets/assets/icons/bsc.svg": "ee8da45a0f7683718f6273fa313a981e",
"assets/assets/icons/btech.svg": "479334dc71c118ec95627c0500cb6c0c",
"assets/assets/icons/calendar.svg": "91be87086be1971c1b6e3992bbd5e20d",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/excel_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/file-pdf.svg": "6c72a6cff086f0c2940042537776f64e",
"assets/assets/icons/folder-download.svg": "b5b19603b581c2a8dcfb4cc2b8c00d39",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/mail.svg": "efd337f07115b2b064fc7d007a27c84f",
"assets/assets/icons/mba.svg": "aa75c1267e89d9c4fb1feb2a433279b5",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/icons/menu_dashboard.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/msc.svg": "c900f170e4ab857f7e0d34c72731c3e9",
"assets/assets/icons/mtech.svg": "3b6f19b1b71f5ac89b47b0a7f112becc",
"assets/assets/icons/notes-edit-add.svg": "aa8355141e4a3d246014c529bbe6f67d",
"assets/assets/icons/notes-edit.svg": "a77af41a9165f05a71807d2f7d572506",
"assets/assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/student.svg": "6a86793800b2c00876168b232038e26b",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/users.svg": "3a65da19fe2c804ab5d340bc21e895f7",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/images/Amazon.png": "6acb542bfb1363a23c82cf6b82cbd83a",
"assets/assets/images/Apple%2520Inc..png": "2d4b6754f44a2d287e8be02970d04bf4",
"assets/assets/images/Blackrock.png": "56bcf7f3b3d32943c7214e54f2364413",
"assets/assets/images/Estee.png": "99a635f7b39578c37bfb6fed972b7dc9",
"assets/assets/images/Google.png": "3e26049d9396f49912688a986b4027b8",
"assets/assets/images/IBM.png": "af62bd98926fbe65cf3e27708aef5938",
"assets/assets/images/Intuit.png": "7f574573a6c5ea84e43d0d05cf3089bb",
"assets/assets/images/McKinsey.png": "966a96341da21c5bdf8d61d10ac58081",
"assets/assets/images/Microsoft.png": "995acfd23e7a6539b64a540f73d84b79",
"assets/assets/images/Morgan%2520Stanley.png": "3aef6c069e0bd4aec0281da1887a13f2",
"assets/assets/images/nsut-logo.png": "26eb6de4e3f200534f8288ab5b24eb8c",
"assets/assets/images/ProcDNA.png": "5ace28565d2a5932d66619e29fbe742d",
"assets/assets/images/Samagra.png": "b5bb73a7d3c2b1905ed12990dfecb30a",
"assets/assets/images/Sprinklr.png": "c944a9b349799992ae59cf10a7bc6ffe",
"assets/assets/images/Unicommerce.png": "11db47190cc7fea7f916a32ffc58dd9e",
"assets/assets/images/Winzo.png": "418ff2b5528444364cec9fa3f0ea9dbb",
"assets/assets/images/Zomato.png": "50ccfb32ad78dab886bd82da350c60f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "177e5e29b1d64c0f98e052476976cc72",
"assets/Kaleidoscope.gif": "46b68b6e36c9b274cdbc4dba8b34365f",
"assets/NOTICES": "e8d9aa6d5541896e1734d0909ff3bcc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"build.rar": "334758265d9a0c7fcc746d8b2495ce87",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c3d197e648f4edd7e4bb8ea920e83d03",
"/": "c3d197e648f4edd7e4bb8ea920e83d03",
"main.dart.js": "5727ae28ef252c4895d8e18911a126aa",
"manifest.json": "f393956267731452763ed2f701d5444d",
"tnplogo.png": "30987e6c5729974725591649d749308c",
"version.json": "9f9cbb400ca9e5d449968d9b44c421d2"};
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
