'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b3c849ba9de38ae8f8b2e98263d2e661",
".git/config": "109d1571f2ca4c6f7da9ffa791e9933f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0cc8e67da483bc5e3a5573622b93dda3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fc5980592aa89f328547583a033c2a91",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f71f761c5579c5ce7210c05a531f6c9b",
".git/logs/refs/heads/main": "67a9e4b9329838462eeb401c214bfd06",
".git/logs/refs/remotes/neworigin/main": "8a64ffaeecb8b420ec49081b0263556e",
".git/logs/refs/remotes/origin/main": "51dede38f0b4af50e03dc1181b41e4dc",
".git/logs/refs/remotes/originn/main": "4872b10bfc0a257c3e04178fe0f77af6",
".git/objects/00/92811250bb80846c2fcad455586c82c2b0bb0e": "e461a63807d99490da0b93d62ae26012",
".git/objects/02/c2bbf3b9fe093756c229fc2f3a84bba4bb9de7": "5f1c68782330fbbb82c64eb3a2738943",
".git/objects/02/c92b05faa5aa80242fdf60eeeaf62bd80c6167": "7e01ac8362dac9ec92f8df6042afc3b4",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/0b24cbd778fba71eaa904e15ea5bb0fa263719": "d0fb5ca8f7a1d386d38e173b6bf16896",
".git/objects/05/bd7ee48e8d76198f562946e7b1aa16aed0c58c": "2d098836e7954854fcd3ef0e45bfe465",
".git/objects/07/2979bbe742daeaf782ac49cde652c3b3ec610d": "55e654cb1a00abacbfe85ee0c6af41a7",
".git/objects/07/6389450ceddb940d3bf19329df8e15b491e056": "f407c525e324c7c5f4516548810bbddc",
".git/objects/0c/27525f66624444443381059559c948c994a6c5": "50b0ae0e0d3ea7d972bdecc28bbfdc6f",
".git/objects/0d/f5d013796f7d21f0c72efb4273fe9843582792": "20c037b2c3e4a3ef5fbd991d9ef0b23c",
".git/objects/0e/59111f633d86be623429cf3758dda1889f1b3c": "04a05914d1242f39476adabc56978674",
".git/objects/0e/b9d74874e23c7e5ae2bdc1a748b9ff1aecb362": "5bd9ae99447d8045e2dc0e013d5468d3",
".git/objects/10/3f6b3db9f5ba5b9643f4228e8b1e36f77e0e2b": "3f1721160a9dcb52d3118f8e84e43d80",
".git/objects/15/eac541ee752d1ffda8e9667a864d964726fa79": "5850d52ea168805f9ea8374fff9e31a9",
".git/objects/16/b5e09bb1313adb6871b198bb33ac826d7eb884": "3268ae044915ee8473910cf5f8c6ee40",
".git/objects/1a/0f16c81f62a40db57a2a203b4d35d05ee611bc": "e711e421e6d955c01a7866e14ffc8628",
".git/objects/1d/6ae5117fa4ed65458891f7160f51bc7869aa57": "6a581b10ed2f85f3c449bae0b21c1f67",
".git/objects/27/be2663fd55f7de0899535c98962f70d4c9b19d": "ac211f460a5c1cb356aba666399ada15",
".git/objects/28/aac61e600cd1b838f359a926ccbe296fdf1d12": "9aee300caf7dd20d393e0f5f2394879b",
".git/objects/28/e3d3c0fde7bbaf8b940865ba317d1d70091d0f": "be009e90b0df7593fedd2658d42c2103",
".git/objects/2b/9d510711b852c80b248b19081fa35a9e522d1a": "46b12c7c08c79cba2e3187c4af71d1ae",
".git/objects/2d/da70254bc8fc94dce3f849c0596e4f1d5a7f38": "1bde27750809f750b335b9c31627bfd0",
".git/objects/32/06e3c1ec53a91610f0ac466d693f3a9e3ed70a": "d6700e9f1028a7df9b6df75da282f0e9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3b/a664bd2e9ded7a7f0b3d7645c25db0e1dc3428": "b6be4ec12e2f8b536058c2eec3bfe03a",
".git/objects/3e/29cc3840d7588677118e4cc1044f039685e2f0": "61d3cab4bd7c544a556bf10bd45342a8",
".git/objects/41/2fc03cf5ab87f98b0353b15448748d6c67f224": "a6916ace5d8bce9ba1649b58fea9a906",
".git/objects/42/0c52354609df241ab8c31339e60c31884da1ed": "fd59b0ab20e913486fb050a80b0a1d02",
".git/objects/43/e5cb71af47ce7396b126b8284c4ee04dd44219": "cbf4ce9a7b0aeee2bd49bc4dc0725aaf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/7a70b8bbe7efae04a6c56a3207a5298d197043": "305cb65305194f709a9760819790d5e4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/28a7c19a1f5e7262d77e3063ea11b8ab610c4c": "71b5c4b4e2962952cca6060ee882b442",
".git/objects/5d/ea212e459b2394c6360d21abc269fb763982f3": "b54c6b45e56863b8998b5927dfc9ffc0",
".git/objects/60/7187e14aa9ac1541aba19de2f9c4a470f6c0a3": "f860a5e588791726b42ca1dbd5b133ef",
".git/objects/61/81b22de4336f9de6f7281d194fc87327d1549c": "fa5270c6429e1ac31c9ddf372bbc1c27",
".git/objects/68/8571c1e74ce1c574930914997491ca632854bc": "c414e1e7bf8b9a48390be11dea50f750",
".git/objects/68/ada2f724baf9f6fda255c23e0fe0efbbbf426d": "89bf224b8e43ac6dcc35e097b1216488",
".git/objects/69/d17d3e8f54e2d048ee35d8ec52055b467d81ff": "57863eb36ababe690e5fc8387adaa425",
".git/objects/69/e4f49558c7608eea934317200be4653cf9226b": "6281cab0a936e96a68b8377c27a0615d",
".git/objects/6b/472d355f381ff09eece053003a17847928bd23": "9913067c71a523ca6624e9f1b8a975dd",
".git/objects/6b/9ec8beef2f283d0db738433fe73e5b67fd03b0": "db3bab4cb13e49e4732ddfd7ea217e92",
".git/objects/6d/801cf115c5464bbed83864ae35a69eb51a85c7": "c175ab1f033454be0b8dc1d46f0ca931",
".git/objects/6f/b07866175aa2c61f3826895909112bc6023da7": "f19e0f99bbc084987c82f7361fe30c42",
".git/objects/75/0b5fd46c6685204725785dbdece22037fc52d3": "b81f73700a268faa51bc9a222354b334",
".git/objects/79/de54d80a19daf480eb58403e7aa88710328d64": "336ac3e8d1d4064051108d3346e7f6d3",
".git/objects/7a/5a971dc42171754dc64162a2070e35a492872e": "00f0b84940cdbe754dfe4ac8831974a2",
".git/objects/7b/4809eb67707d669635fa76d51632c040984773": "38260b2100eaa9867c9da229f7877c66",
".git/objects/7f/9268dd97a232f9fb5f414ac3ae8e5051fbe038": "5bce585d63e914026c23214c2b5eaa4d",
".git/objects/80/0e7c87deb35f34a2961f9b53a4466142c770f7": "026122eaf4e440bc7038700298859902",
".git/objects/80/0ee4e0118035056721c9b583091a539748f9d9": "7494ed9cf0a122e5fba68c9c3f823dbb",
".git/objects/80/9c933554f6591159e3a03fc3ed0b5e33b1c73d": "759277fea4b59a140c7af5b33dda3a9e",
".git/objects/83/38a5da3cf921c0f7aa2dd1749948fdb0e41456": "b1f52eb62ee957586f1ff974c274fb61",
".git/objects/83/bda1352a9a7d95b933adea0f9c9f1c1ffe54a3": "4e0f9b3a192291870c72074afeca69cf",
".git/objects/84/106117f9ee77c83e9eed297d472ef8c37dde25": "866951be5c0d8307a956382b6e285507",
".git/objects/84/6656f4f5b04a883792a525e19a16588ba6e98f": "22b390814a12263c2cb72c473d675421",
".git/objects/88/815fa8f5fdbb914342da610581f75634453f8e": "30c2750d55f29706840c41b473f5ade2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b5fd88f152c16b90cc272b053059f8103d09d7": "1ce990a7393d65c171b65437227b1b79",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8f/95949f5fe47b342b4f54f18712075082259fc3": "1c35dd0d7ab8cf0982584d7b8eb59fa9",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/97/fa6a51e91dcab2cbad0fd4c6a27852e435942b": "a7d20c1202d130643a4027b479b706f5",
".git/objects/9e/6581e74f46570de935a403daa69dbd6ce9dc09": "ca23e28a4830ba4342792e46578fd410",
".git/objects/a4/d4a9a82b5250f77ff172998618dd7e015ce279": "b9bf65a6767d8eb3069592021b0468b7",
".git/objects/a8/6c72ab73bbc43e3210e5cb8ad69885aebd0b71": "b732b16e4058dac1dc8bf1b78654b798",
".git/objects/ae/05d2699e7d9d0b27c830e6626085666f35b2cf": "a69a611044a6e15827ae2458298f30b1",
".git/objects/b2/df3f7f5e259bd3923d0aacb0b5a292919caba3": "1ba76bfd257440cc323183fc68a1bb02",
".git/objects/b3/8ace2d5816b9ff6cc90308fda06ef48481e789": "999a2a706bc2d7b9d0adbb4d91a4c144",
".git/objects/b4/5d7e71aa92ecae1377184730737df964e5bc8b": "66dcd742924e121ecfe9ba086e774d5b",
".git/objects/b4/86a94da6da18f35fc48071a55c148cabaa9dd6": "f31ac09af08e57f77ba805270a6d3790",
".git/objects/b5/5d589cceb7c5740a6e6c9b9be31bbf3b066521": "40a5a7593b9c40b661e6c5daba407534",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ab40dd6218c0935c46b87413728665d4f44aa6": "dbbbf986b2f4d388318437454c23da9e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/2a49abefe4c732ba813dd9130cb123048565bf": "f5f9cc3eff7a210588c1a92f7a29d19f",
".git/objects/be/77521551d6e7d3673cf27c81bc5172e637dcb8": "dab1ac75b07f0532607c4ef16e0e3a09",
".git/objects/c1/7330529f332e6e0b6ca4d40d51706b4a46f918": "fa8c438d4c381abc8c47a509a788e082",
".git/objects/c4/6002e1cc63605f27476d6cc6caec66f9acb0f1": "e99538b27fb10e997cc7719adc2feda3",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/cf/da7434b12d1bd110250857e3f4a8e994d29ec7": "6ec999a6b8bc44057aafe78a7bca0ac9",
".git/objects/d0/0ca5e304994e8b868366fa884ef302e0cb662a": "6e61482d8aee489568e42d38725f4875",
".git/objects/d3/f61d3cb08651544f9e6652de28ab8525934b83": "bfe26829da2207d23b2b7677f9692201",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/0a16c83448745d84aae7b8f736ee3218621306": "fe4ec81f8524c87f19b6022c32f0c98e",
".git/objects/d9/1d51cbbb12f266edff48c198e6120a729886d3": "24d9f012229ac5f03516d155dc041d3e",
".git/objects/d9/37da256eb6db495ab86f31a34e4eca6e44888e": "27ff08eaf4e4d1256f048c518e5cad08",
".git/objects/dc/224db47c8d0a780e86ad2a6be0f7b99f9f649a": "a73a4c2a25521f08dabcd49f0098acb1",
".git/objects/df/12c6338a230a772447696cd55b4cdd50979794": "84e38b4e947b32717200d1b5b557a3a7",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/125e7aaf57527f2e10156b9db6cb13d49d7fb0": "5b019df018f4f449fa98c8126c02b0ed",
".git/objects/e4/ac0c6114e292a0e44176a9d36ec5daf2663d39": "192379717940d3b49533ab1b99da6a38",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/42ab4d6f5b87984e4e45191837a4b4784e70a4": "398e6ab42e26fc1db664279da4294d23",
".git/objects/f9/ec8e24330ead572bebc8a88823848b5f6aebd1": "3e62dfa6cdd6cf6b23462d3f11962729",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/1243b23877219ce8390c06e23b7f6102b42689": "5da24c44f1669ad005d0ea62bd84ffbe",
".git/objects/fe/9487b82956b6659525021746d41cf743e2d834": "0128ffb4aab7f9d2c0602643d74eff71",
".git/ORIG_HEAD": "178ea4043cae4c0202250a216dd91920",
".git/refs/heads/main": "dd35b0722c76d0889260caeac9766e18",
".git/refs/remotes/neworigin/main": "dd35b0722c76d0889260caeac9766e18",
".git/refs/remotes/origin/main": "5a540a6c261d3889e0445974c66ed7a7",
".git/refs/remotes/originn/main": "42b2ad5c24bf77d2c982f9863d7d6314",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "22736c29b246bbf585e7b7d9b782fea9",
"assets/NOTICES": "70e950794b33fe7070132c9eaa88041f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "7c4a2df28f03b428a63fb10250463cf5",
"canvaskit/canvaskit.wasm": "976170e5b27ef5d87fe04fb3976c5192",
"canvaskit/chromium/canvaskit.js": "2236901a15edcdf16e2eaf18ea7a7415",
"canvaskit/chromium/canvaskit.wasm": "16a1ade5de288346ac56e2b236b69db7",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "8a87caf97e3d09a005d89818067a3ed6",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "fb95f8c28e91b1fe6085c43de16cb188",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "507780c5d52933ce7c3a8213c15fa328",
"/": "507780c5d52933ce7c3a8213c15fa328",
"main.dart.js": "cf80c5c990f41d068a18a25b718a28bc",
"manifest.json": "54099970464de1bb00e72779205c3f65",
"README.md": "00bb70593aa980ff4d84941e8441117a",
"version.json": "7c5718faee6ccf1588460a29f18ad694"};
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
