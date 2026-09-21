const LEGACY_REDIRECTS = new Map([
  ['/rejseguide/rejser-til-vietnam-2026', '/rejseguide/rejser-til-vietnam/'],
  ['/rejseguide/rejser-til-vietnam-2026/', '/rejseguide/rejser-til-vietnam/'],
]);

const clean = (value, max = 160) => typeof value === 'string'
  ? value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, max)
  : '';

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
  async fetch(request, env) {
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
