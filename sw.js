// 포르투갈 여행 일정 · 오프라인 캐시
const CACHE = "pt-trip-v18";
const IMGCACHE = "pt-img-v1";
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
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== IMGCACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // 위키백과 사진: 한 번 본 사진은 캐시(오프라인에서도 표시)
  if (url.hostname === "upload.wikimedia.org") {
    e.respondWith(
      caches.open(IMGCACHE).then(c => c.match(req).then(hit => hit || fetch(req).then(res => {
        c.put(req, res.clone()).catch(() => {});
        return res;
      }).catch(() => hit)))
    );
    return;
  }
  // 그 외 외부(지도·예약·위키 API 등)는 캐시하지 않고 네트워크
  if (url.origin !== location.origin) return;
  // 같은 출처(앱 자체): 캐시 우선
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match("index.html")))
  );
});
