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
  return { message: 'Moviepark Adonis server' }
})

//TMDB General routes

Route.get('/tmdb/trending', 'TmdbsController.getTrending')
Route.get('/tmdb/nextTheaters', 'TmdbsController.getNextInTheaters')
Route.get('/tmdb/genresList', 'TmdbsController.getGenresList')

//TMDB Search routes
Route.get('/tmdb/search/person/:query', 'TmdbsController.getPersonId')
Route.get('/tmdb/search/defaultMovieList/:page', 'TmdbsController.getSearchDefaultMovieList')
Route.get('/tmdb/search/byName/:name/:page', 'TmdbsController.getSearchedByNameMovieList')
Route.get('/tmdb/search/withFilters/:query', 'TmdbsController.getSearchedWithFiltersMovieList')

//Dummy TMDB General routes

Route.get('/dummyTmdb/trending', 'DummyTmdbsController.getTrending')
Route.get('/dummyTmdb/nextTheaters', 'DummyTmdbsController.getNextInTheaters')
Route.get('/dummyTmdb/genresList', 'DummyTmdbsController.getGenresList')

//Dummy TMDB Search routes
Route.get('/dummyTmdb/search/person/:query', 'DummyTmdbsController.getPersonId')
Route.get('/dummyTmdb/search/defaultMovieList/:page', 'DummyTmdbsController.getSearchDefaultMovieList')
Route.get('/dummyTmdb/search/byName/:name/:page', 'DummyTmdbsController.getSearchedByNameMovieList')
Route.get('/dummyTmdb/search/withFilters/:query', 'DummyTmdbsController.getSearchedWithFiltersMovieList')
