const GITHUB_REPO = 'mcnneatcqgeap7i/openclawBrowserPub';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let path = url.pathname;

    if (path === '/' || path === '') {
      path = '/latest.yml';
    }

    const targetUrl = `https://github.com/${GITHUB_REPO}/releases/latest/download${path}`;

    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Cloudflare-Worker-Proxy/1.0'
      }
    });

    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Cache-Control', 'public, max-age=3600');
    return newResponse;
  }
};
