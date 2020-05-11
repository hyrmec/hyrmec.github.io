'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "623f6885ccd0d798ecf03695e8ecc8d6",
"/": "623f6885ccd0d798ecf03695e8ecc8d6",
"main.dart.js": "cd66235fd8a55bc5242bb00cc166d5ef",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/bg_dark.jpg": "7589c61c2236d055eff16748b39aa06c",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/works/spn24.jpg": "f2bfe2af97bf20086e7bf84d4267d95c",
"assets/assets/works/1rs.png": "98cf0e44fcaf506299c64a772242ecc3",
"assets/assets/works/spn24.png": "8c8ff0bd125aaf564cd0c7545af5b5b7",
"assets/assets/works/bp.png": "def435cf33956514a7f1be585a24e67f",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/bg_light.jpg": "01f24839c4948c7ec05027098ba0f23a",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/avatar.jpg": "bc3422e8d7bed835711631c0b9f43638",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/FontManifest.json": "08792490555b179235543cfffa3ed5ec",
"assets/AssetManifest.json": "3768002d9f7115bb70ec3449331e1332",
"assets/LICENSE": "89ccce1dfd2ea201733616a7ccfdd5da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"manifest.json": "6e7bd90e98b6d36e0fb1506222c6bde3",
".git/ORIG_HEAD": "eed14c8f411d14db7382406ced1d098c",
".git/index": "4f28d20214cbb63d0e21023c541d1ad3",
".git/refs/heads/master": "cc8e5e1078ddb21fafcbc1484d4a56aa",
".git/refs/remotes/origin/master": "cc8e5e1078ddb21fafcbc1484d4a56aa",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/logs/refs/heads/master": "f5d5e5cd67a100011b7e049a10c0dd59",
".git/logs/refs/remotes/origin/master": "6816c620005d42c3ca7394596c9394ed",
".git/logs/HEAD": "cf510b1659e6b4b6cd73dbc1552b98e2",
".git/config": "e98ff77b09b304ff9181a4619ba4866b",
".git/FETCH_HEAD": "a81444d9055d89b2d8eefcb0647ea3db",
".git/objects/2f/7fe7a041023b8f093f3a4107104d4e899e20b4": "0b44bccc6da6961677bb7c0429e97bed",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/50/5abbf1f347f6c6b21b2af9a24c80b39d8b358b": "ad1468052c73f08f34e15d7a6f5132b7",
".git/objects/50/c3b69d14dd4405ad630d4581141012eff6f4f1": "d0696ccea0597b53306b370c723cc076",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/eb/fda5fd29ffe65f3646f2f60b8e055202614d25": "a3098e9628f7efef8ef8289833ae8547",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/e6/b1ca343f8e2f93010d9191d47131075b46b6a0": "425d0f510c10d725a922c79bcfe9f9d4",
".git/objects/8b/149fe7c3a9f36a87621007037bb3c335ccd882": "dcb058da0832f9564f37944219afff17",
".git/objects/57/e659bb79954ad9771ed37e35e4fa351033595b": "6df460a0801cad1b008deccbcc3dd17f",
".git/objects/ed/5678990300772db1b361e912350d22723e6d49": "6053bfc950c04ce9e52eb3603fb843a8",
".git/objects/b9/fc67ea0e40c499463477af5736c1d47aa7fbd4": "cbaa0573be06093203b2fc30e3d82d6f",
".git/objects/7c/101e189ea6f9c37b54ae9199040d42338e6197": "70373eb746f70df76ebefb65e224dd2a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/29/43882dfe0c2d36abd50e33d0671f880962261c": "ef1d2ddb11d4e331d1b0b51c840f865c",
".git/objects/f3/091434e11ec48d76009c6488eb49a7ce2ee05b": "73d6e2e54fc09eae7804d3afd3a95dc4",
".git/objects/ca/fe4967e2446f9f6b769dd9ea59eb323346719a": "d18e90abb3bd15174f854532b8d0a04a",
".git/objects/c0/b51937f061ee353edd94c960642bc2d795a2de": "272769fb2e265296a964c8e893742cb7",
".git/objects/54/6986e906e56572069122bafc4bbc428e1e6c58": "be8d83a7eaace8cf08b5bca96d9a552d",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/a7/5fde4ce6ede2b26811d099f864236b74d6d0e5": "6d61afd95995fbe8cfe1096553491f79",
".git/objects/d9/e4714eca2efcdcbb0f92124c44fbba87e8c4c6": "538feca48a40906172392d05ea403f43",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/87/581c484328d545215e726fba81b88dfd81cbf6": "417b02f36bbf68dc8dd90ef063b9a476",
".git/objects/5f/71b060c7783615a98cca247a05e35ac61c376d": "f242c4e5457c420e363bd42ad142ddda",
".git/objects/d3/ed6eb2db8dab79bd06e6a2d0f68be36a98b9cc": "dccb2d965ba4d29b9c4c17603437bc92",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/97/f163e741b136ca3f39aa14373b09e9c40868d4": "d7e05194bb3912da0568f18fbac55f98",
".git/objects/39/7fbb3f9da06067f09447360af5c7b5c26fc029": "99421c47eac76793522622015b6e2616",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/75/676134bbfc051f34b12af722cdf780a8de3394": "28188c4ea7548e1b23339a476db9847c",
".git/objects/4a/aa5ac54b81c0a50594b5985c988e286411eda3": "820d0841f590011d6513e94db95ef6b0",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/ba/4bc5de3a11f52e04ca5bc0277c9c05a8358401": "82bd1a05ca59703c28f253d11557aade",
".git/objects/f5/bea1b3ecbaef4b569bca7c052b490c657b5675": "efe15036e6dd7fd49baa9ed6dca61c43",
".git/objects/46/17c76d410054f4af5cd57275e5b561a9c9b362": "a6993aa2a8dbfa4ecbf574482e0a08ec",
".git/objects/bf/7eafe00bb7fc25efb4619c62c4fbf6217e24ee": "c967bd6350109bf77234aa9c39d16d3e",
".git/objects/bf/fa93b51adb6ddb08ea212a2d8ffd4c0d516cab": "ae782e814484840c8156d2792ad6a2b1",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/af/b08bee9279127d06e69db1c25934867c7d6a95": "12539e3b7fb61f92ef5af151551046a3",
".git/objects/73/973de8ddda5712722aaa9310eddfad36675b06": "aa4a08bf23be3e035d20c3c4da81bed5",
".git/objects/f7/47014284088fcb0d1089092a7a8068d0479bad": "a72ca724095ec06bfda3344d423a7927",
".git/objects/f7/271773fc260fd2cda1bda314b676e53f7e4317": "7e390835bb4cd0855278f52983b932ec",
".git/objects/e7/2dfd0875bb2bd3d128b4e308ca004732b57630": "7ab24f6e3bb9e63f385494ca5e45f558",
".git/objects/00/51f6665fe783f59a9fdfc360532d23d0f85078": "09397de68e3d892229adb07748bc760c",
".git/objects/ac/19b329149abc2af5022ff4a0d870df6deb8800": "d5d17af325de4deccb03b8d79486c6bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e631a00bdae85cbb64842af06cd1de17be456e": "10df3c501aaa0421aba30596c68f1ee1",
".git/objects/5a/126a3adc492118cfed3dd39909724629c4a91d": "e936996d5931cec864fdfceb8dec79e8",
".git/objects/3f/2f8d3fc65f3f15aba093933055f7af811f94a0": "c6de2663f2101d7a48de29288d5a2eae",
".git/objects/3e/9195309822963a71e5ec7c9d9f8ba025a507de": "9c558bad5ab53e5b0e1778f4db981906",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/1a/a98304e59ade84a3ea585ce80918f4f2fcd1fc": "8e1a81deb89a0251cec7fc6cc3af5ce4",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/51/2a000a5cf8a76768557850b42ac2b54347bd0f": "a83e72fedcf3ae97f75a4794c317dd72",
".git/objects/24/3034a7bd122c7109578d7ab224815ba15f823a": "0d10bed3c5ba251c6bad0ae82d7c53ec",
".git/COMMIT_EDITMSG": "59e30478dc3e56cb88699b8cf53db4a5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
