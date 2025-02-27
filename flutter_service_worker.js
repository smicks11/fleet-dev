'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b091fed6a248cdff5df659f40f6da27b",
"version.json": "4b781d5e3a9f5a60a5d09441d26185bf",
"index.html": "4b94495ed294aa80878019bb8d983ea0",
"/": "4b94495ed294aa80878019bb8d983ea0",
"main.dart.js": "5b38686ceba060dfd49a7f9e2d7a8eae",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ae9f51c51a401de7533def307d69dcd9",
".git/config": "4a02175f7f9531a0894909955eaf2f0d",
".git/objects/61/50eea508b4f1ba68c3eb43a3ad4e684a0dc90a": "4730a2c0636ce5287dfba976dbdeffb2",
".git/objects/0d/3b4b34f126567806e8fae1d4ceb5085b73b107": "ddbe918ae9334a16fa7c90b693d79953",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/04/7b4a02b35339b29aac37f57a243683cb5e71ad": "3443f3a54cfecccd81a843c866f8edb9",
".git/objects/69/87c9099e893a2fd2f6c01912c2d4433759deab": "dd4c72b96885ec2aaee89ca4eb5da542",
".git/objects/67/2b7481681f1dd9e7a360c54e17ac6331955995": "741a5716bc6a18972066dc86e0cb1edf",
".git/objects/05/488b322dadae3c5c20ffefa6f8493ac6f67caf": "ab8fa803b4562d1a9f220cc89d628237",
".git/objects/02/96afc982b6f09004b99e05712d8ef20d22b6ac": "f17266fad29aec938adbbba8575f0446",
".git/objects/b5/836c6bd57f875c9b36987371abc6cc210f2103": "8d07d2b2a1926032666f192d560a3ec8",
".git/objects/bb/270bdee7ae06443f38d909ea9a3f7e731c95e0": "7819f7ce2f9808bb553a03970c3bb349",
".git/objects/da/4239edb4f9912a7efd037c86893cd366e894dc": "3bda3202f7d527be489bc79c890153e6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/8508ad4eb11dc45d4ba9df7e9595965ed7e420": "58eb21e37565c2e62ec5ca9f99a5bd6a",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/20/94dc4ed4936e0818e906c83af3108d78f954ad": "7ab0b7f8bf4732177da4609429dcede0",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/45/f9f8ea9463549413dd2177e8e98685c348176e": "f745cd82221338de79b5e6b877fdb7b2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/87/af05417ccbb14b73dba4e2ff92bb6bd1dceeda": "17cb206da66873a5bb6785fe2f0b8438",
".git/objects/80/116d31e7de7473cf6f0c68da49560438820d75": "457cfc1a2cea400db15c6e109189fc97",
".git/objects/74/1a1a03e8a069b35b2a15d5b3348c46bdbd2660": "65a50b3bd241245df2315399aa04f39b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/40f36be3b93f4bb60455916b748df7487d6015": "914e46bf7da49b729909484800dbf2a8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/31/bb56feda7eea84451456198fa542a624dc6e3b": "cc9945b46ae23553e767cfdabd57dddb",
".git/objects/65/0c4201de2f5b10976329860eee88086053a290": "137b75ebf89b36bc5883a44db0170618",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/b9f09c61cb200703afa33ce2f73c1ac491d15a": "6d13abe30e86b0a1d43038b8ab1162f5",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/d2/34eae72ac3580870e4918734c0263ebdf2d046": "097b8825bb990556fd054db40414e6bd",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/151f44b3aaa454dfe667c262b686b517f68c10": "9c2691d41be176e175fd6a947f1d1d05",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a562b399ac3eabc010234a4670b0866c00a033": "704cc0cabcd8f092cce17293fc001a3c",
".git/objects/b9/74fabf2f6c84cf46a76167b8701fdebbc36407": "b476d5213eae3c05a0d250dbe647c626",
".git/objects/a1/2a053c2954e300eb79862306ad769ec468a451": "3fc46652dd5fcf3b84cc70eb50a3b5b4",
".git/objects/a1/f0c1ed84b7bb56dcb8189167d593349b5de7b5": "f5c2f62958204296caf386776c26fa26",
".git/objects/ef/891ab0b78d0502770e2fd871bd6d5e31541a4d": "7e9ed4b9774a0202332c9a1685279be9",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ce/cd31e54a66863d9e623c2d2fb4e863f6547608": "11183c168996f28ade6bf0eda1c8bb78",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/c560c8bb08f729da0442bf306370f26b1a3236": "86662fd1ef2a5ff37891d59dcf7bceac",
".git/objects/79/bcfed6d418a65577cad2a0fbefefd7a52e56a4": "4d8d633fa7eb37550cfe6cdb59a5acca",
".git/objects/2d/59982e3707de962829b5486e0b3abb66ba5c09": "55609df8ac82ee1a0abe6d66fb016242",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/12/99e89a4d71163dfef1a5abd0acb0f176d84906": "d5121f82f834ba0c57feb402b725e5e1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/49/9db2c7431017175571c0c904545281e3af2dfb": "047d543ddf3194191f27d3750d9df289",
".git/objects/2b/b80d5292cec9678e79855e003bac02bda7b3ce": "7b77470db3320cfb2177bfa0b69ed9df",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "89481e688c9d28bc2a216896a3610a9f",
".git/logs/refs/heads/main": "89481e688c9d28bc2a216896a3610a9f",
".git/logs/refs/remotes/origin/main": "c602d5da4b3420ec452ea26a75b2f6a0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6f4233502d17f487545a45a6482536b9",
".git/refs/remotes/origin/main": "6f4233502d17f487545a45a6482536b9",
".git/index": "359dd4b9756e39f9cac4b31b4d1a5aed",
".git/COMMIT_EDITMSG": "282b46d8d8fa9b179ac046d9145b9e0b",
"assets/AssetManifest.json": "484dce71a9340d1a3b5ba4f12f3c8f44",
"assets/NOTICES": "ea7801cc6fdf88bfee94efc01719e794",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "03df6e97248f983ec59fff94e912df09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3da1956ec32343da797f32c4a036dc81",
"assets/fonts/MaterialIcons-Regular.otf": "dbd1a57cb85cb380ffa7874973375d65",
"assets/assets/svg/search.svg": "ab29dbf9b3cc40e1d2e0eae3c9557b14",
"assets/assets/svg/User.svg": "a22c371ced2564437f12d6bf64642e53",
"assets/assets/svg/overview.svg": "9a1327149f72f2eb3b9dea0a067c695c",
"assets/assets/svg/settings.svg": "4a0ee3aecdcdb9d2960ea4df50ab29eb",
"assets/assets/svg/Bell.svg": "123cb467e82793438b29c5570ab68be4",
"assets/assets/svg/reload.svg": "4d3bf6a206893fe98123b394daae7194",
"assets/assets/svg/no_search.svg": "d0b9e1af0f1df03b932883efcdb335a2",
"assets/assets/svg/edit.svg": "88087d904e20910aebccbd9badf6fcea",
"assets/assets/svg/integration.svg": "4f1011bc738b5ef6f545c701e7d8b8ec",
"assets/assets/svg/car.svg": "42ebaad23844ff643ae36af22f1491c6",
"assets/assets/svg/filter.svg": "b575cdd9741f4347622aa478102503ee",
"assets/assets/svg/menu.svg": "4f744b78aa5a48fc30975d9007188d52",
"assets/assets/png/login_bg.png": "854a983bdb7730cb6ba2c5ff66dd23cb",
"assets/assets/png/user.png": "6162536bd15ffd0d8dc072f2bbe01428",
"assets/assets/png/logo.png": "d63f695ba95ae91d1edbe32c48195d84",
"assets/assets/png/car.png": "8e71f60ee0cf0a9ee23f3178ee0c556f",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
