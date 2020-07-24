/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return 'Moviepark Server 1.3.0'
})

Route.get('/robots.txt', async () => {
  return 'User-agent: *\nDisallow: /'
})

// Auth routes
Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout').middleware('auth')
Route.get('/check', 'AuthController.check')

// Watchlist routes
Route.get('/watchlist/get', 'WatchlistsController.getList').middleware('auth')
Route.post('/watchlist/addMovie', 'WatchlistsController.addMovie').middleware('auth')
Route.put('/watchlist/updateMovie', 'WatchlistsController.updateMovie').middleware('auth')
Route.delete('/watchlist/deleteMovie', 'WatchlistsController.deleteMovie').middleware('auth')

//TMDB General routes
Route.get('/tmdb/trending', 'TmdbsController.getTrending')
Route.get('/tmdb/nextTheaters', 'TmdbsController.getNextInTheaters')
Route.get('/tmdb/genresList', 'TmdbsController.getGenresList')
Route.get('/tmdb/movie/:id', 'TmdbsController.getMovieDetails').where('id', /^[0-9]+$/)

//TMDB Search routes
Route.get('/tmdb/search/person/:query', 'TmdbsController.getPersonId')
Route.get('/tmdb/search/defaultMovieList/:page', 'TmdbsController.getSearchDefaultMovieList')
Route.get('/tmdb/search/byName/:name/:page', 'TmdbsController.getSearchedByNameMovieList')
Route.get('/tmdb/search/withFilters/:query', 'TmdbsController.getSearchedWithFiltersMovieList')

//Utelly route
Route.get('/utelly/:id', 'UtellyController.getStreamingServicesById').where('id', /^[0-9]+$/)

//Catch the rest
Route.get('/*', async ({response}) => {
  return response.status(404).json({ status: 404, error: 'Not Found' })
})
