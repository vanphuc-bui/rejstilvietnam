const LEGACY_REDIRECTS = new Map([
  ['/rejseguide/rejser-til-vietnam-2026', '/rejseguide/rejser-til-vietnam/'],
  ['/rejseguide/rejser-til-vietnam-2026/', '/rejseguide/rejser-til-vietnam/'],
]);

const clean = (value, max = 160) => typeof value === 'string'
  ? value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, max)
  : '';

const HOME_HERO_SOURCE = 'https://images.unsplash.com/photo-1528127269322-539801943592';
const HOME_HERO_WIDTHS = new Set([480, 640, 800, 960, 1280, 1600]);

const REMOTE_IMAGE_HOSTS = new Set([
  'commons.wikimedia.org',
  'upload.wikimedia.org',
  'images.unsplash.com',
  'plus.unsplash.com',
]);

function isAllowedRemoteImageUrl(value) {
  try {
    const url = value instanceof URL ? value : new URL(value);
    return url.protocol === 'https:'
      && !url.username
      && !url.password
      && REMOTE_IMAGE_HOSTS.has(url.hostname);
  } catch {
    return false;
  }
}

async function fetchAllowedRemoteImage(targetUrl) {
  let current = new URL(targetUrl);

  for (let hop = 0; hop < 5; hop += 1) {
    if (!isAllowedRemoteImageUrl(current)) {
      return new Response('Forbidden image host', { status: 403 });
    }

    const response = await fetch(current.toString(), {
      redirect: 'manual',
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'User-Agent': 'RejsTilVietnam image proxy',
      },
      cf: {
        cacheEverything: true,
        cacheTtl: 604800,
      },
    });

    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get('Location');
      if (!location) return new Response('Invalid image redirect', { status: 502 });
      current = new URL(location, current);
      continue;
    }

    return response;
  }

  return new Response('Too many image redirects', { status: 508 });
}

async function serveRemoteImage(request, ctx) {
  const requestUrl = new URL(request.url);
  if (requestUrl.pathname !== '/media/remote-image') return null;

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
  }

  const raw = requestUrl.searchParams.get('url') || '';
  if (!raw || raw.length > 2200) {
    return new Response('Bad Request', { status: 400 });
  }

  let target;
  try {
    target = new URL(raw);
  } catch {
    return new Response('Bad Request', { status: 400 });
  }

  if (!isAllowedRemoteImageUrl(target)) {
    return new Response('Forbidden image host', { status: 403 });
  }

  const cache = caches.default;
  const cacheKey = new Request(requestUrl.toString(), { method: 'GET' });
  const cached = await cache.match(cacheKey);
  if (cached) {
    if (request.method === 'HEAD') {
      return new Response(null, { status: cached.status, headers: cached.headers });
    }
    return cached;
  }

  const upstream = await fetchAllowedRemoteImage(target);
  if (!upstream.ok) {
    return new Response('Image unavailable', { status: 502 });
  }

  const contentType = upstream.headers.get('Content-Type') || '';
  if (!contentType.toLowerCase().startsWith('image/')) {
    return new Response('Upstream did not return an image', { status: 502 });
  }

  const headers = new Headers(upstream.headers);
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  headers.set('CDN-Cache-Control', 'public, max-age=31536000, immutable');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.delete('Set-Cookie');
  headers.delete('Vary');

  const response = new Response(upstream.body, {
    status: 200,
    headers,
  });

  ctx?.waitUntil(cache.put(cacheKey, response.clone()));

  if (request.method === 'HEAD') {
    return new Response(null, { status: 200, headers });
  }
  return response;
}

async function serveHomeHero(request, ctx) {
  const url = new URL(request.url);
  const match = url.pathname.match(/^\/media\/home-hero-(\d+)\.webp$/);
  if (!match) return null;

  const width = Number(match[1]);
  if (!HOME_HERO_WIDTHS.has(width)) {
    return new Response('Not Found', { status: 404 });
  }

  const cache = caches.default;
  const cacheKey = new Request(url.toString(), { method: 'GET' });
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const quality = width <= 800 ? 60 : 72;
  const sourceUrl = new URL(HOME_HERO_SOURCE);
  sourceUrl.searchParams.set('auto', 'format');
  sourceUrl.searchParams.set('fit', 'crop');
  sourceUrl.searchParams.set('fm', 'webp');
  sourceUrl.searchParams.set('w', String(width));
  sourceUrl.searchParams.set('q', String(quality));

  const upstream = await fetch(sourceUrl.toString(), {
    headers: {
      Accept: 'image/webp,image/*,*/*;q=0.8',
      'User-Agent': 'RejsTilVietnam image proxy',
    },
    cf: {
      cacheEverything: true,
      cacheTtl: 604800,
    },
  });

  if (!upstream.ok) {
    return new Response('Image unavailable', { status: 502 });
  }

  const headers = new Headers(upstream.headers);
  headers.set('Content-Type', 'image/webp');
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  headers.set('CDN-Cache-Control', 'public, max-age=31536000, immutable');
  headers.delete('Set-Cookie');
  headers.delete('Vary');

  const response = new Response(upstream.body, {
    status: 200,
    headers,
  });

  ctx?.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}

async function recordAffiliateClick(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
  }

  const origin = request.headers.get('Origin');
  if (origin && origin !== 'https://rejstilvietnam.dk') {
    return new Response('Forbidden', { status: 403 });
  }

  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > 8192) {
    return new Response('Payload Too Large', { status: 413 });
  }

  let input;
  try {
    input = await request.json();
  } catch {
    return new Response('Bad Request', { status: 400 });
  }

  const page = clean(input?.page, 220) || '/';
  const provider = clean(input?.provider, 80) || 'unknown';
  const destination = clean(input?.destination, 80) || 'sitewide';
  const placement = clean(input?.placement, 100) || 'unspecified';
  const targetHost = clean(input?.targetHost, 120) || 'unknown';
  const linkText = clean(input?.linkText, 120);

  // Deliberately store no IP address, user ID, cookie, full affiliate URL or user-agent.
  env.AFFILIATE_ANALYTICS?.writeDataPoint({
    indexes: ['rejstilvietnam.dk'],
    blobs: [page, provider, destination, placement, targetHost, linkText],
    doubles: [1],
  });

  return new Response(null, {
    status: 204,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let shouldRedirect = false;

    // Canonicalise scheme/hostname and legacy URLs in one hop.
    if (url.protocol !== 'https:' || url.hostname === 'www.rejstilvietnam.dk') {
      url.protocol = 'https:';
      url.hostname = 'rejstilvietnam.dk';
      shouldRedirect = true;
    }

    const legacyTarget = LEGACY_REDIRECTS.get(url.pathname);
    if (legacyTarget) {
      url.pathname = legacyTarget;
      shouldRedirect = true;
    }

    if (shouldRedirect) {
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/api/affiliate-click') {
      return recordAffiliateClick(request, env);
    }

    if (request.method === 'GET' || request.method === 'HEAD') {
      const heroResponse = await serveHomeHero(request, ctx);
      if (heroResponse) return heroResponse;

      const remoteImageResponse = await serveRemoteImage(request, ctx);
      if (remoteImageResponse) return remoteImageResponse;
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);

    headers.set('Strict-Transport-Security', 'max-age=31536000');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
