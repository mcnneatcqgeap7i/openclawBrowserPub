const GITHUB_REPO = 'mcnneatcqgeap7i/openclawBrowserPub';
const FETCH_TIMEOUT_MS = 10000;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    if (path === '/' || path === '') {
      path = '/latest.yml';
    }

    const targetUrl = `https://github.com/${GITHUB_REPO}/releases/latest/download${path}`;

    // Serve from cache to throttle outbound requests to GitHub
    const cache = caches.default;
    const cacheKey = new Request(targetUrl);
    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    // Enforce timeout to prevent resource exhaustion from slow/hung connections
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    let response;
    try {
      response = await fetch(targetUrl, {
        headers: { 'User-Agent': 'Cloudflare-Worker-Proxy/1.0' },
        signal: controller.signal,
      });
    } catch (e) {
      return new Response('Gateway Timeout', { status: 504 });
    } finally {
      clearTimeout(timeoutId);
    }

    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Cache-Control', 'public, max-age=3600');
    ctx.waitUntil(cache.put(cacheKey, newResponse.clone()));
    return newResponse;
  }
};
