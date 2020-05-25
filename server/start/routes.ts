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
  return 'Moviepark Server 1.0.0'
})

//TMDB General routes
Route.get('/tmdb/trending', 'TmdbsController.getTrending')
Route.get('/tmdb/nextTheaters', 'TmdbsController.getNextInTheaters')
Route.get('/tmdb/genresList', 'TmdbsController.getGenresList')
Route.get('/tmdb/movie/:id', 'TmdbsController.getMovieDetails')

//TMDB Search routes
Route.get('/tmdb/search/person/:query', 'TmdbsController.getPersonId')
Route.get('/tmdb/search/defaultMovieList/:page', 'TmdbsController.getSearchDefaultMovieList')
Route.get('/tmdb/search/byName/:name/:page', 'TmdbsController.getSearchedByNameMovieList')
Route.get('/tmdb/search/withFilters/:query', 'TmdbsController.getSearchedWithFiltersMovieList')

//Catch the rest
Route.get('/*', async ({response}) => {
  return response.status(404).json({ status: 404, error: 'Not Found' })
})
