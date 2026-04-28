// functions/[[path]].js
const GITHUB_REPO = 'mcnneatcqgeap7i/openclawBrowserPub';

export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  let path = url.pathname;

  if (path === '/' || path === '') {
    path = '/latest.yml';  // electron-updater 默认请求的文件
  }

  const targetUrl = `https://github.com/${GITHUB_REPO}/releases/latest/download${path}`;

  const response = await fetch(targetUrl, {
    headers: {
      'User-Agent': 'Cloudflare-Pages-Proxy/1.0'
    }
  });

  // 加上缓存，提升性能
  const newResponse = new Response(response.body, response);
  newResponse.headers.set('Cache-Control', 'public, max-age=3600');
  return newResponse;
}
