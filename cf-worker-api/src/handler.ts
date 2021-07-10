declare const CACHE: KVNamespace;

const ORIGIN = 'https://api.themoviedb.org/3';

export async function handleRequest(event: FetchEvent, url: URL, endpoint: string) : Promise<Response> {
  const originUrl = url.href.replace(url.href, ORIGIN + endpoint);

  const init = {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  }

  const cachedData = await CACHE.get(originUrl);

  if (cachedData === null) {
    const response = await fetch(originUrl);
    const data = await response.json();

    event.waitUntil(CACHE.put(originUrl, JSON.stringify(data), {expirationTtl: 43200}));
    event.passThroughOnException();
    return new Response(JSON.stringify(data), init);
  }

  event.passThroughOnException();
  return new Response(cachedData, init);
}
