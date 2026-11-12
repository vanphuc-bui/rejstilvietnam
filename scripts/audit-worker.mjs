import assert from 'node:assert/strict';
import worker from '../worker.js';

const points = [];
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

// A previously discovered Mekong Delta URL must resolve to the published guide.
for (const oldPath of [
  '/destinationer/ho-chi-minh-city/mekong-delta',
  '/destinationer/ho-chi-minh-city/mekong-delta/',
]) {
  const response = await worker.fetch(
    new Request(`https://rejstilvietnam.dk${oldPath}`), env
  );
  assert.equal(response.status, 301);
  assert.equal(
    response.headers.get('location'),
    'https://rejstilvietnam.dk/destinationer/ho-chi-minh-city/mekong-delta-fra-ho-chi-minh-city/'
  );
}

// Non-page endpoints should fail invalid bot GETs, but remain functional for valid requests.
const analyticsGet = await worker.fetch(new Request('https://rejstilvietnam.dk/api/affiliate-click'), env);
assert.equal(analyticsGet.status, 405);
const missingImageSource = await worker.fetch(new Request('https://rejstilvietnam.dk/media/remote?src='), env);
assert.equal(missingImageSource.status, 400);

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

console.log('Worker redirect and affiliate analytics checks passed.');
