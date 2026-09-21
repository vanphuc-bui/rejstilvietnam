import assert from 'node:assert/strict';
import worker from '../worker.js';

const points = [];
const cachedImages = new Map();
const originalFetch = globalThis.fetch;
globalThis.caches = {
  default: {
    match: async (request) => cachedImages.get(request.url),
    put: async (request, response) => cachedImages.set(request.url, response),
  },
};

const env = {
  ASSETS: {
    fetch: async () => new Response('asset', { status: 200 }),
  },
  AFFILIATE_ANALYTICS: {
    writeDataPoint: (point) => points.push(point),
  },
};

const legacy = await worker.fetch(
  new Request('https://rejstilvietnam.dk/rejseguide/rejser-til-vietnam-2026/'),
  env
);
assert.equal(legacy.status, 301);
assert.equal(
  legacy.headers.get('location'),
  'https://rejstilvietnam.dk/rejseguide/rejser-til-vietnam/'
);

const canonicalLegacy = await worker.fetch(
  new Request('http://www.rejstilvietnam.dk/rejseguide/rejser-til-vietnam-2026/?src=test'),
  env
);
assert.equal(canonicalLegacy.status, 301);
assert.equal(
  canonicalLegacy.headers.get('location'),
  'https://rejstilvietnam.dk/rejseguide/rejser-til-vietnam/?src=test'
);

const analytics = await worker.fetch(
  new Request('https://rejstilvietnam.dk/api/affiliate-click', {
    method: 'POST',
    headers: {
      origin: 'https://rejstilvietnam.dk',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      page: '/destinationer/phu-quoc/o-hop-og-snorkling/',
      provider: 'getyourguide',
      destination: 'phu-quoc',
      placement: 'activity-card-cta',
      targetHost: 'gyg.me',
      linkText: 'Se tur og aktuel pris',
    }),
  }),
  env
);
assert.equal(analytics.status, 204);
assert.equal(points.length, 1);
assert.deepEqual(points[0].indexes, ['rejstilvietnam.dk']);
assert.equal(points[0].blobs[0], '/destinationer/phu-quoc/o-hop-og-snorkling/');
assert.equal(points[0].blobs[1], 'getyourguide');
assert.equal(points[0].blobs[2], 'phu-quoc');
assert.equal(points[0].blobs[3], 'activity-card-cta');
assert.deepEqual(points[0].doubles, [1]);

const imageFetches = [];
globalThis.fetch = async (input) => {
  const url = typeof input === 'string' ? input : input.url;
  imageFetches.push(url);
  if (url.startsWith('https://commons.wikimedia.org/')) {
    return new Response(null, {
      status: 302,
      headers: { location: 'https://upload.wikimedia.org/example.jpg' },
    });
  }
  if (url === 'https://upload.wikimedia.org/example.jpg') {
    return new Response(new Uint8Array([255, 216, 255, 217]), {
      status: 200,
      headers: { 'content-type': 'image/jpeg' },
    });
  }
  return originalFetch(input);
};

const imageProxy = await worker.fetch(
  new Request('https://rejstilvietnam.dk/media/remote-image?url=' + encodeURIComponent('https://commons.wikimedia.org/wiki/Special:FilePath/example.jpg?width=1200')),
  env,
  { waitUntil: () => {} }
);
assert.equal(imageProxy.status, 200);
assert.equal(imageProxy.headers.get('content-type'), 'image/jpeg');
assert.match(imageProxy.headers.get('cache-control') || '', /max-age=31536000/);
assert.deepEqual(imageFetches, [
  'https://commons.wikimedia.org/wiki/Special:FilePath/example.jpg?width=1200',
  'https://upload.wikimedia.org/example.jpg',
]);

const blockedImageProxy = await worker.fetch(
  new Request('https://rejstilvietnam.dk/media/remote-image?url=' + encodeURIComponent('https://example.com/not-allowed.jpg')),
  env,
  { waitUntil: () => {} }
);
assert.equal(blockedImageProxy.status, 403);

globalThis.fetch = originalFetch;

const rejected = await worker.fetch(
  new Request('https://rejstilvietnam.dk/api/affiliate-click', {
    method: 'POST',
    headers: {
      origin: 'https://example.com',
      'content-type': 'application/json',
    },
    body: '{}',
  }),
  env
);
assert.equal(rejected.status, 403);

console.log('Worker redirect, image proxy and affiliate analytics checks passed.');
