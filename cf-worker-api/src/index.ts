import { handleRequest } from './handler'

declare const TMDB_API_KEY: string;

addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const userAgent = event.request.headers.get("User-Agent") || ""

  if (userAgent.includes("bot")) {
    return new Response("Block User Agent containing bot", { status: 403 })
  }

  if (url.pathname === '/favicon.ico') {
    return event.respondWith(new Response('No favicon', { status: 404 }));
  }

  if (url.pathname === '/v1' || url.pathname === '/v1/') {
    return event.respondWith(
      new Response('Moviepark 2.0 - TMDB API Reverse-Proxy with Cloudflare Workers', {
        headers: {
          "content-type": "application/json;charset=UTF-8"
        }
      })
    );
  }

  if (url.pathname.startsWith('/v1/')) {
    const endpoint = url.href.split('/v1/')[1].replace('APIKEY', TMDB_API_KEY);
    return event.respondWith(handleRequest(event, url, endpoint));
  } else {
    return event.respondWith(fetch(event.request));
  }
})




