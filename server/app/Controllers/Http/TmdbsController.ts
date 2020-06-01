import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import tmdbApi from '../../Services/TmdbService'
import fs from 'fs'
import path from 'path'

async function handleRequest (context: HttpContextContract, axiosPromise: Promise<any>) {
  try {
    const { data } = await axiosPromise
    context.response.status(200).send(data)
  } catch (err) {
    console.log(err.response)
    context.response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
  }
}
export default class TmdbsController {
  public async getTrending (context: HttpContextContract) {
    return handleRequest(context, tmdbApi.getTrending())
  }

  public async getNextInTheaters (context: HttpContextContract) {
    return handleRequest(context, tmdbApi.getNextInTheaters())
  }

  public async getGenresList ({ response }: HttpContextContract) {
    const genresList = fs.readFileSync(path.join(__dirname,'../../Files/genreslist.json'), 'utf-8')
    response.status(200).json(JSON.parse(genresList))
  }

  public async getMovieDetails (context: HttpContextContract) {
    return handleRequest(context, tmdbApi.getMovieDetails(context.params.id))
  }

  //SEARCH
  public async getPersonId (context: HttpContextContract) {
    return handleRequest(context, tmdbApi.getPersonId(context.params.query))
  }

  public async getSearchDefaultMovieList (context: HttpContextContract) {
    return handleRequest(context, tmdbApi.getSearchDefaultMovieList(context.params.page))
  }

  public async getSearchedByNameMovieList (context: HttpContextContract) {
    return handleRequest(context, tmdbApi.getSearchedByNameMovieList(context.params.name, context.params.page))
  }

  public async getSearchedWithFiltersMovieList (context: HttpContextContract) {
    return handleRequest(context, tmdbApi.getSearchedWithFiltersMovieList(context.params.query))
  }
}
