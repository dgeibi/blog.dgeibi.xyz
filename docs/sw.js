var CACHE_NAME="#575559",urlsToCache=["/","/css/style.css","/js/main.js","/js/svg4everybody.js","/icon.svg"];self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(e){return console.log("Opened cache"),e.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(n){if(n)return n;var t=e.request.clone();return fetch(t).then(function(n){if(!n||200!==n.status||"basic"!==n.type)return n;var t=n.clone();return caches.open(CACHE_NAME).then(function(n){n.put(e.request,t)}),n})}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){return CACHE_NAME!=e?caches["delete"](e):void 0}))}))});