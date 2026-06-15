// 포르투갈 여행 일정 · 오프라인 캐시
const CACHE = "pt-trip-v2";
const ASSETS = [
  "./",
  "index.html",
  "manifest.json",
  "fonts/NanumSquareR.woff2",
  "fonts/NanumSquareB.woff2",
  "fonts/NanumSquareEB.woff2",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  // 같은 출처만 캐시(지도·예약 등 외부 링크는 그대로 네트워크)
  if (new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match("index.html")))
  );
});
