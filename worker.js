const LEGACY_REDIRECTS = new Map([
  ['/rejseguide/rejser-til-vietnam-2026', '/rejseguide/rejser-til-vietnam/'],
  ['/rejseguide/rejser-til-vietnam-2026/', '/rejseguide/rejser-til-vietnam/'],
  ['/destinationer/ha-long-bay/dagstur-eller-overnatning', '/destinationer/hanoi/ha-long-bay-fra-hanoi/'],
  ['/destinationer/ha-long-bay/dagstur-eller-overnatning/', '/destinationer/hanoi/ha-long-bay-fra-hanoi/'],
  ['/destinationer/da-nang/da-nang-til-hoi-an', '/destinationer/hoi-an/da-nang-til-hoi-an/'],
  ['/destinationer/da-nang/da-nang-til-hoi-an/', '/destinationer/hoi-an/da-nang-til-hoi-an/'],
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
]);

function remoteImageUrl(input) {
  if (!input || !/^https?:\/\//i.test(input)) return input;
  try {
    const parsed = new URL(input);
    if (!REMOTE_IMAGE_HOSTS.has(parsed.hostname)) return input;
    return `/media/remote?src=${encodeURIComponent(parsed.toString())}`;
  } catch {
    return input;
  }
}

function rewriteSrcset(value = '') {
  return value
    .split(',')
    .map((candidate) => {
      const trimmed = candidate.trim();
      if (!trimmed) return '';
      const match = trimmed.match(/^(https?:\/\/\S+)(\s+.+)?$/i);
      if (!match) return trimmed;
      const proxied = remoteImageUrl(match[1]);
      return `${proxied}${match[2] ?? ''}`;
    })
    .filter(Boolean)
    .join(', ');
}

async function serveRemoteImage(request, ctx) {
  const url = new URL(request.url);
  if (url.pathname !== '/media/remote') return null;

  const raw = url.searchParams.get('src');
  if (!raw) return new Response('Missing src', { status: 400 });

  let source;
  try {
    source = new URL(raw);
  } catch {
    return new Response('Invalid src', { status: 400 });
  }

  if (source.protocol !== 'https:' || !REMOTE_IMAGE_HOSTS.has(source.hostname)) {
    return new Response('Image host not allowed', { status: 403 });
  }

  const cache = caches.default;
  const cacheKey = new Request(url.toString(), { method: 'GET' });
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  let upstream;
  try {
    upstream = await fetch(source.toString(), {
      redirect: 'follow',
      headers: {
        Accept: 'image/avif,image/webp,image/*,*/*;q=0.8',
        'User-Agent': 'RejsTilVietnam image proxy/1.0',
      },
      cf: {
        cacheEverything: true,
        cacheTtl: 604800,
      },
    });
  } catch {
    return new Response('Image upstream unavailable', { status: 502 });
  }

  if (!upstream.ok) {
    return new Response('Image upstream unavailable', { status: 502 });
  }

  const contentType = upstream.headers.get('Content-Type') || '';
  if (!contentType.toLowerCase().startsWith('image/')) {
    return new Response('Upstream did not return an image', { status: 502 });
  }

  const headers = new Headers(upstream.headers);
  headers.set('Cache-Control', 'public, max-age=2592000, stale-while-revalidate=604800');
  headers.set('CDN-Cache-Control', 'public, max-age=2592000, stale-while-revalidate=604800');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.delete('Set-Cookie');
  headers.delete('Vary');

  const response = new Response(request.method === 'HEAD' ? null : upstream.body, {
    status: 200,
    headers,
  });

  if (request.method === 'GET') {
    ctx?.waitUntil(cache.put(cacheKey, response.clone()));
  }
  return response;
}

function rewriteExternalImages(response) {
  if (typeof HTMLRewriter === 'undefined') return response;

  class ImgHandler {
    element(element) {
      const src = element.getAttribute('src');
      const srcset = element.getAttribute('srcset');
      if (src) {
        const proxied = remoteImageUrl(src);
        if (proxied !== src) element.setAttribute('src', proxied);
      }
      if (srcset) element.setAttribute('srcset', rewriteSrcset(srcset));
      element.removeAttribute('referrerpolicy');
    }
  }

  class SourceHandler {
    element(element) {
      const srcset = element.getAttribute('srcset');
      if (srcset) element.setAttribute('srcset', rewriteSrcset(srcset));
    }
  }

  return new HTMLRewriter()
    .on('img', new ImgHandler())
    .on('source', new SourceHandler())
    .transform(response);
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
      const remoteImageResponse = await serveRemoteImage(request, ctx);
      if (remoteImageResponse) return remoteImageResponse;

      const heroResponse = await serveHomeHero(request, ctx);
      if (heroResponse) return heroResponse;
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);

    headers.set('Strict-Transport-Security', 'max-age=31536000');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    const hardenedResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });

    const contentType = headers.get('Content-Type') || '';
    if (request.method === 'GET' && contentType.includes('text/html')) {
      return rewriteExternalImages(hardenedResponse);
    }

    return hardenedResponse;
  },
};
