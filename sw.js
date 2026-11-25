const V="idea-vault-v2";
const SHELL=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).catch(()=>{}).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=="GET"||u.origin!==location.origin)return; // Firebase, Google sign-in, fonts: always straight to network
  if(r.mode==="navigate"){
    e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(V).then(h=>h.put("./index.html",c));return x}).catch(()=>caches.match("./index.html")));
    return;
  }
  e.respondWith(caches.match(r).then(hit=>{
    const net=fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(V).then(h=>h.put(r,c))}return x}).catch(()=>hit);
    return hit||net;
  }));
});
