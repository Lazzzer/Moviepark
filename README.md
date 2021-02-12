![Moviepark Banner](https://raw.githubusercontent.com/Lazzzer/Moviepark/master/doc/images/banner.png)

![Publish Docker images](https://github.com/Lazzzer/Moviepark/workflows/Publish%20Docker%20images/badge.svg)
## About Moviepark
Moviepark is an open-source project using the TMDb API for its movie catalog.

## Stack
- [Nuxt.js](https://github.com/nuxt/nuxt.js)
- [Adonis.js 5](https://github.com/adonisjs)
- [TailwindCSS](https://github.com/tailwindcss/tailwindcss)
- [Traefik 2.3](https://github.com/containous/traefik/)
- [Redis](https://redis.io/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Requirements
- [Node.js >= 14.0.0](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-docker/)
- [a TMDb API key](https://developers.themoviedb.org/3/getting-started/introduction)
- [an Utelly API key](https://rapidapi.com/utelly/api/utelly)

## Project setup

Set your .env variables then:

```bash
> cd client
> npm install
> npm run dev

# and in another tab

> cd server
> npm install
> node ace serve --watch
```

To check how it would look like in production with docker (don't forget to add your .env variables in the docker-compose file) :

```bash
#In the root folder
> docker-compose -f docker-compose.staging.yml up --build
```

## Todo

- [x] Release version 1.0 Yay!
- [x] Caching
- [x] Get streaming services for each movie with Utelly's API
- [ ] More search filters (ex: search by company...)
- [x] Watchlist
