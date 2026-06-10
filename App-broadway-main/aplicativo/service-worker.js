// =========================
// CACHE DO APP
// =========================

const CACHE_NAME =
"broadwayverse-v1";

// Arquivos para guardar offline
const urlsToCache = [

"/",
"/index.html",
"/musicais.html",
"/quiz.html",
"/style.css",
"/script.js",
"/quiz.js"

];

// Instala
self.addEventListener(
"install",
(event)=>{

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache=>{

return cache.addAll(urlsToCache);

})

);

});

// Busca
self.addEventListener(
"fetch",
(event)=>{

event.respondWith(

caches.match(event.request)
.then(response=>{

return response || fetch(event.request);

})

);

});