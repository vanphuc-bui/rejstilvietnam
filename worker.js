export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Always use the canonical HTTPS origin. This protects against browsers
    // reopening a cached http:// URL and also normalises the www hostname.
    if (url.protocol !== 'https:' || url.hostname === 'www.rejstilvietnam.dk') {
      url.protocol = 'https:';
      url.hostname = 'rejstilvietnam.dk';
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);

    // Tell browsers to keep using HTTPS for future visits after a successful
    // HTTPS response has been received.
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
