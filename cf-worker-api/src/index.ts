import { handleRequest } from './handler';

declare const TMDB_API_KEY: string;

addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const userAgent = event.request.headers.get("User-Agent") || "";

  // Blocking requests from bots
  if (userAgent.includes("bot")) {
    return event.respondWith(new Response("Block User Agent containing bot", { status: 403 }));
  }

  if (url.search.includes('?api_key=APIKEY')) {
    const endpoint = url.pathname + url.search.replace('APIKEY', TMDB_API_KEY);
    return event.respondWith(handleRequest(event, url, endpoint));
  } else {
    return event.respondWith(new Response('Moviepark 2.0 - TMDB API Reverse-Proxy with Cloudflare Workers'));
  }
})