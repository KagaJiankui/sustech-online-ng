/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "53bc85e3eef791a71bb58a439e68b1bd"
  },
  {
    "url": "about.html",
    "revision": "ce53983a2d1262bc4dd119b682bf9180"
  },
  {
    "url": "assets/css/0.styles.f83eee3f.css",
    "revision": "f879a744a7357651b19548285e2a44c5"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/59cf84079d9ff4f9.c3cb8642.jpg",
    "revision": "c3cb86428ca95ea7809e4d036b128f88"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.55a23f0b.svg",
    "revision": "55a23f0ba589def11d722a76b4672052"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/busline2.d007a398.png",
    "revision": "d007a398c9483d2e223ecef841927ba8"
  },
  {
    "url": "assets/img/cas-login.dfbae961.png",
    "revision": "dfbae961438fb4f789ee70f463722b1e"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/chrome-browser-desktop.e1f4ef5c.png",
    "revision": "e1f4ef5cf06ca958ec117aca49c74b98"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/database.ff3c4edf.png",
    "revision": "ff3c4edfbf324af9136e6ea8d0df7ed2"
  },
  {
    "url": "assets/img/discount.8bc3f011.png",
    "revision": "8bc3f0114babaeb594603c8d41908a76"
  },
  {
    "url": "assets/img/english-vocabulary-daka.be106d43.png",
    "revision": "be106d43bcc04ec57a0c2a30f2d3d96f"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/IMG_20210123_205049.50b37749.jpg",
    "revision": "50b3774914c541b0bf82c53bbf7babd6"
  },
  {
    "url": "assets/img/IMG_20210126_195515.6e5798e8.jpg",
    "revision": "6e5798e838b6316c0d63516bf2217f14"
  },
  {
    "url": "assets/img/IMG_20210126_195546.64da6a29.jpg",
    "revision": "64da6a297e623bba762e4611a17e307b"
  },
  {
    "url": "assets/img/IMG_20210126_195856.50b26fe4.jpg",
    "revision": "50b26fe4593d88ec4236396acf71ccac"
  },
  {
    "url": "assets/img/IMG_20210126_195932.cc16b5b6.jpg",
    "revision": "cc16b5b6cc7b5d3b418cb6ef3b59f00c"
  },
  {
    "url": "assets/img/IMG_20210126_200439_edit_7106211807769.679c984e.jpg",
    "revision": "679c984e3cc616f2a894b628a7da95b0"
  },
  {
    "url": "assets/img/IMG_20210126_205402.5b5d2cc1.jpg",
    "revision": "5b5d2cc105685e7f0fc1ad80559701cc"
  },
  {
    "url": "assets/img/IMG_20210126_205908.73ed6cb5.jpg",
    "revision": "73ed6cb55530f8bd19980029946ca663"
  },
  {
    "url": "assets/img/IMG_20210126_210458.2062dad8.jpg",
    "revision": "2062dad8c05bf3a6dd2ac50c61f734a6"
  },
  {
    "url": "assets/img/IMG_20210126_210550.b0ee9b5a.jpg",
    "revision": "b0ee9b5ac13f8c02b4bf84f11bef0e73"
  },
  {
    "url": "assets/img/IMG_20210126_210622.042c5b47.jpg",
    "revision": "042c5b47ddbb72825795dfe663af5eec"
  },
  {
    "url": "assets/img/IMG_20210126_211345.589c64df.jpg",
    "revision": "589c64df659620fda62d9d557cdd4680"
  },
  {
    "url": "assets/img/interior.e8186b41.jpg",
    "revision": "e8186b41f73e27f8554f9988ead92470"
  },
  {
    "url": "assets/img/ios.6e324d40.png",
    "revision": "6e324d4040e2d29fcc549444a2add317"
  },
  {
    "url": "assets/img/major-overview.69f3f2bd.png",
    "revision": "69f3f2bd127892b13703668e936b73aa"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/qr-code.9c784d6e.jpg",
    "revision": "9c784d6e62e54647252c3e081e3c22e9"
  },
  {
    "url": "assets/img/reader-service.0c0368aa.png",
    "revision": "0c0368aaf3a1423f0441e1f2728d0d9d"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-2.bf12b859.jpeg",
    "revision": "bf12b8599e3e0d18b56878b2891c067d"
  },
  {
    "url": "assets/img/scan-2-3.e9ebc852.jpeg",
    "revision": "e9ebc852daaaac202876b7e0d86c1941"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/Screenshot_20210128_114248_com.MobileTicket.b64a9636.jpg",
    "revision": "b64a9636ad938d85cb54a89e599c7c36"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.e1db2f11.js",
    "revision": "356e41960be67160ce1c06e89570969b"
  },
  {
    "url": "assets/js/11.4790461b.js",
    "revision": "2dbebe16d06b4c40c47e6d13f0e848e8"
  },
  {
    "url": "assets/js/12.d32b5ac4.js",
    "revision": "385df380f5a296ea249d48c33713f15b"
  },
  {
    "url": "assets/js/13.5c5bb1b1.js",
    "revision": "dbd79bc51c2b4f3baeebe463b367c56c"
  },
  {
    "url": "assets/js/14.e4bd2d4f.js",
    "revision": "b3a20c8f612ae7d2ab32807d3a57dc3a"
  },
  {
    "url": "assets/js/15.73424de8.js",
    "revision": "46e993afb1a0f394eee9b85a6f7ae66e"
  },
  {
    "url": "assets/js/16.2c2e6135.js",
    "revision": "f0ce8b0a50951acde6ffff5162de788b"
  },
  {
    "url": "assets/js/17.e419fe5e.js",
    "revision": "c10ff878b9b142e8ba4c78a447d370ce"
  },
  {
    "url": "assets/js/18.72df1754.js",
    "revision": "a827c58bb7cb5f4793a4ebb55a611079"
  },
  {
    "url": "assets/js/19.419ba173.js",
    "revision": "3ef52c6b12f7a70572c26a10971d30d2"
  },
  {
    "url": "assets/js/2.eb6f06f0.js",
    "revision": "a1ce5718f7e831af12f193ce0238ff36"
  },
  {
    "url": "assets/js/20.c28619b5.js",
    "revision": "bfdcef36b90840c1f756dc5839dea9fc"
  },
  {
    "url": "assets/js/21.f9a1fcb9.js",
    "revision": "534b07fcdac357d55a44eb45f4bc34e3"
  },
  {
    "url": "assets/js/22.383d2d87.js",
    "revision": "3e3d0462bd856303e560d90da2d8f4e1"
  },
  {
    "url": "assets/js/23.3ec834ff.js",
    "revision": "62ed88895aca46dc03836ad4e78838b4"
  },
  {
    "url": "assets/js/24.197aa869.js",
    "revision": "35139c40266c0256fa1766912b963e24"
  },
  {
    "url": "assets/js/25.587cec77.js",
    "revision": "1975319a1ccabdfe464e4a3f3470b48e"
  },
  {
    "url": "assets/js/26.a345d273.js",
    "revision": "ac47f1b5866637914a66c8203c9748d0"
  },
  {
    "url": "assets/js/27.776b5720.js",
    "revision": "32bde0abe7dffa9a82a3dee645a778bb"
  },
  {
    "url": "assets/js/28.57f19883.js",
    "revision": "7dad42946e45a9cfa0152460cb7eadf8"
  },
  {
    "url": "assets/js/29.a1383f1a.js",
    "revision": "698f4be263de23d1b7bfbad62572c2ee"
  },
  {
    "url": "assets/js/3.eb7f560e.js",
    "revision": "c2add9f7d82ee9ce08b739129e0fd5c2"
  },
  {
    "url": "assets/js/30.3323e748.js",
    "revision": "e039080a83455e0be48be04785e7415f"
  },
  {
    "url": "assets/js/31.14781230.js",
    "revision": "f5cfff8c62a12a6d41807abd62a04f84"
  },
  {
    "url": "assets/js/32.8ee816bc.js",
    "revision": "3b4d57657fa4ec6cf0b1d98192c0ec60"
  },
  {
    "url": "assets/js/33.40b16729.js",
    "revision": "573504192cf0fe8f8ee0c92f3eab823e"
  },
  {
    "url": "assets/js/34.cbf24018.js",
    "revision": "c660f7992d404b71ad0d37b9178db791"
  },
  {
    "url": "assets/js/35.2653f650.js",
    "revision": "04153c4bb8ae9a6a4838b282d3adfb06"
  },
  {
    "url": "assets/js/36.c0cb24cc.js",
    "revision": "440272ed964ffba390d512deb7001294"
  },
  {
    "url": "assets/js/37.1a5a4150.js",
    "revision": "673656a7c63f8272fe69fc93b09dd51e"
  },
  {
    "url": "assets/js/38.11402017.js",
    "revision": "86aa717739f1815cd2c324a899eaa058"
  },
  {
    "url": "assets/js/39.480ac2e7.js",
    "revision": "a5c5564f7694f68eadcd3e67ecd77139"
  },
  {
    "url": "assets/js/4.546bb53a.js",
    "revision": "84075abd2e3f3bc5e9ea30c0cf2b2a36"
  },
  {
    "url": "assets/js/40.da7e539b.js",
    "revision": "4181a082732db0205a62bec88b9a4a52"
  },
  {
    "url": "assets/js/41.37a2d03e.js",
    "revision": "9552f828d10ed06f3082419c71f19c05"
  },
  {
    "url": "assets/js/42.6955b048.js",
    "revision": "e237ef0c350511fd2f1a35497fc85980"
  },
  {
    "url": "assets/js/43.d54f9208.js",
    "revision": "a2371b81f47aa674c2355767c1279f21"
  },
  {
    "url": "assets/js/44.6f042ba2.js",
    "revision": "5ad4919a3bd88df11082abca2f9e439a"
  },
  {
    "url": "assets/js/45.4084f3c4.js",
    "revision": "d30bb17a72fc85b42c01dd96510b4c97"
  },
  {
    "url": "assets/js/46.bad181c9.js",
    "revision": "db5ecda54bbdd111876ba395c2a1adc3"
  },
  {
    "url": "assets/js/47.15dd83f0.js",
    "revision": "74bb915dc69840da4dd7f8e844465c67"
  },
  {
    "url": "assets/js/48.9ab7ccb8.js",
    "revision": "75e844309628799035c9de76b2a50aeb"
  },
  {
    "url": "assets/js/49.27028986.js",
    "revision": "0f7f63c7408463c859ed79c959eff832"
  },
  {
    "url": "assets/js/5.b654eff1.js",
    "revision": "0fc106e354d9008004d0cc06bae4770e"
  },
  {
    "url": "assets/js/50.9953f2e3.js",
    "revision": "2889a86681c4d2131b6d209d9b060662"
  },
  {
    "url": "assets/js/51.0dc0bae9.js",
    "revision": "9ff9cd3d858f0052d9750f604e47a9ab"
  },
  {
    "url": "assets/js/52.57dec8e2.js",
    "revision": "51aecd97baaa27594095b1ce61de29d3"
  },
  {
    "url": "assets/js/53.1e256b91.js",
    "revision": "9c0c62059473f66dc6ba4021a0f7a37b"
  },
  {
    "url": "assets/js/54.1f99a600.js",
    "revision": "3c951ddbd90b44329703bcaceb20e067"
  },
  {
    "url": "assets/js/55.d6ab9fa2.js",
    "revision": "5e0ec252e7d6ba593568919bf69d77b9"
  },
  {
    "url": "assets/js/56.748d3383.js",
    "revision": "546385dafac7fd01fcf020677ffcb71e"
  },
  {
    "url": "assets/js/57.046951ab.js",
    "revision": "184799fc55cf09c43a43cb7e0bcb4a2f"
  },
  {
    "url": "assets/js/58.558fd9b9.js",
    "revision": "ed8e8f330d38d2617c085d80b819b137"
  },
  {
    "url": "assets/js/59.fa053951.js",
    "revision": "a3b43c6c1e3669aa6ac54e623d1a2d49"
  },
  {
    "url": "assets/js/6.9839a798.js",
    "revision": "2d436d79c695422d06026600f71b5424"
  },
  {
    "url": "assets/js/7.93bf0abf.js",
    "revision": "58510ca95ceca91b8b92c59566c9915c"
  },
  {
    "url": "assets/js/8.8cf88683.js",
    "revision": "98e8a0c7c911da1d7844e7ca4c533d20"
  },
  {
    "url": "assets/js/9.21270b19.js",
    "revision": "887c9bc2f5bcd850a525be3ac109ec56"
  },
  {
    "url": "assets/js/app.5c192d00.js",
    "revision": "bc90725e9834b439ca764632c28e2645"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "33db04a9ba07fd72aba8bf4111892e9a"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "18bc135ec4643437d0f1f83008ef1cef"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "26804f57380e969a23f55bb2d3edd15a"
  },
  {
    "url": "calendar/2021-2022.html",
    "revision": "7b091fec0f7721087cff1fb0391acb4d"
  },
  {
    "url": "calendar/index.html",
    "revision": "48e14e2bb51b907acc3add0d09e63d38"
  },
  {
    "url": "contact/index.html",
    "revision": "dafe23408a952e521215e9de19246d21"
  },
  {
    "url": "emergency/index.html",
    "revision": "e164242a30998650a68452107ed8c601"
  },
  {
    "url": "facility/index.html",
    "revision": "075a1394ef69b30bb96ce058f6998e51"
  },
  {
    "url": "facility/panolens.html",
    "revision": "b7481e5e2a56e111991441406a8bc438"
  },
  {
    "url": "if-you-are-a-freshman.html",
    "revision": "8118273ee3ec1468cf974e3d083bb6a9"
  },
  {
    "url": "index.html",
    "revision": "a1d3ed814d59d22c646c59cbcffeb22b"
  },
  {
    "url": "life/catering/index.html",
    "revision": "c275ea00e9f50a10a8a5b5d8f0a940e3"
  },
  {
    "url": "life/dormitory/index.html",
    "revision": "0a863f17f44cf49030e499fb2fd2b09d"
  },
  {
    "url": "life/freshman-register/index.html",
    "revision": "dea0d4df2442aaa52301a8d9242089c6"
  },
  {
    "url": "life/index.html",
    "revision": "91eea2163d20a7d0dffcf416f4adc970"
  },
  {
    "url": "life/sports-facility/index.html",
    "revision": "64b792b0ab7938756c30111273f71228"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "365fe1b24d3bcf4fdfe04f8361285429"
  },
  {
    "url": "news/index.html",
    "revision": "d9fd3d718527e68596b6cb4c119be98a"
  },
  {
    "url": "organizations/index.html",
    "revision": "5635fc927708f3002195eb9ecdca968d"
  },
  {
    "url": "organizations/registered-organization-2019.html",
    "revision": "674b8ee78686a3ed1648e247cd1990a1"
  },
  {
    "url": "organizations/registered-organization-2020.html",
    "revision": "95065abbf49184496b91f4db15cfef56"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "4cbce704df13a8514a3706dde929d6ae"
  },
  {
    "url": "service/campus-card/index.html",
    "revision": "a0780345a92b7436db90c19d87c6e458"
  },
  {
    "url": "service/email/index.html",
    "revision": "345936822d06019e2282a102ee8ea7df"
  },
  {
    "url": "service/index.html",
    "revision": "8585c9aec49a00baee6f4fbc0dcb9b4f"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "0e00a4716ce254eecc58e3b836868e0d"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "7e1c6492feb94fe737a61b522d737bd8"
  },
  {
    "url": "service/medical-treatment/index.html",
    "revision": "14c0af287c0a69146df5b4f40fd446b1"
  },
  {
    "url": "service/network/apply-for-vpn/index.html",
    "revision": "b8dfd391e8cfbe45cb131bcc8927f7a5"
  },
  {
    "url": "service/network/choose-a-pad/index.html",
    "revision": "062f131708dc9621fc12126b7d927697"
  },
  {
    "url": "service/network/choose-a-router/index.html",
    "revision": "3d2c9230e6df27f2588f5ccacda4c44d"
  },
  {
    "url": "service/network/eduroam/index.html",
    "revision": "dbdf88311d9143cb1686d5728f71a6a8"
  },
  {
    "url": "service/network/index.html",
    "revision": "d3c08ac6f36fa08d1907d4ff32a752fb"
  },
  {
    "url": "service/network/remote-desktop/index.html",
    "revision": "64011228dad762d4c185598d47009093"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "9d7bcc665234635a5a62eb6b742a9e42"
  },
  {
    "url": "service/sid/index.html",
    "revision": "5b06cb1ff75a13e567390e3904d5c093"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "95ff7168e6f819d41cf93c166ec2bb58"
  },
  {
    "url": "service/student-train-ticket/index.html",
    "revision": "abbcf969ffabfd4c354efb837481f1e4"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "20c0502dd4dd7a103df40ada01144243"
  },
  {
    "url": "service/work-wechat/index.html",
    "revision": "e663966893a2b7ead4d4344fc74a38bf"
  },
  {
    "url": "site-help/index.html",
    "revision": "8aaa9e814f028ca43daae14300d2cfb9"
  },
  {
    "url": "study/book-list-by-prof-yuan/2018/index.html",
    "revision": "dfe0b3be9a01b5f050f40310308665f2"
  },
  {
    "url": "study/borrow-books/index.html",
    "revision": "2d3125caa4e19dcd28d76dfb329c52bb"
  },
  {
    "url": "study/by-shude-college/advice-on-study.html",
    "revision": "7fac8d413a078609476aa15c0d256039"
  },
  {
    "url": "study/by-shude-college/info-on-study.html",
    "revision": "c3f6e8d315e020e0d6f94410df50fa3d"
  },
  {
    "url": "study/index.html",
    "revision": "5e248b240ad9671679d0b4da4876fbea"
  },
  {
    "url": "surroundings/index.html",
    "revision": "8a7d4494c9841f3282cfe576d557a732"
  },
  {
    "url": "transport/holiday.html",
    "revision": "28aee1043e85601665d2918756e5f2f3"
  },
  {
    "url": "transport/index.html",
    "revision": "c55c6890063866d6782e1cd0d11dd4ef"
  },
  {
    "url": "transport/workday.html",
    "revision": "602abe5fb07c7211c5851ec6a5ac89b2"
  },
  {
    "url": "wx_helper.js",
    "revision": "09d67f229a32659f1acf7d55a767e962"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
