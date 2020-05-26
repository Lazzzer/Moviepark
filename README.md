![Moviepark Banner](https://raw.githubusercontent.com/Lazzzer/Moviepark/master/doc/images/banner.png)

## About Moviepark
Moviepark is an open-source project using the TMDb API for its movie catalog.

## Stack
- [Nuxt.js](https://github.com/nuxt/nuxt.js)
- [Adonis.js 5](https://github.com/adonisjs)
- [TailwindCSS](https://github.com/tailwindcss/tailwindcss)
- [Traefik 2.2](https://github.com/containous/traefik/)

## Requirements
- [Node.js >= 12.0.0](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-docker/)
- [a TMDb API key](https://developers.themoviedb.org/3/getting-started/introduction)

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

To check how it would look like in production with docker:

```bash
#In the root folder
> docker-compose -f docker-compose.staging.yml up
```

## Todo

- [x] Release version 1.0 Yay!
- [ ] Get streaming services for each movie with [Utelly's API](https://rapidapi.com/utelly/api/utelly)
- [ ] More search filters (ex: search by company...)
- [ ] Watchlist