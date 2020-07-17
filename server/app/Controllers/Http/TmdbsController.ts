import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import tmdbApi from '../../Services/TmdbService'
import Redis from '@ioc:Adonis/Addons/Redis'

async function handleRequest (context: HttpContextContract, axiosPromise: Promise<any>) {
  try {
    const { data } = await axiosPromise
    context.response.status(200).send(data)
  } catch (err) {
    context.response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
  }
}

async function handleRequestWithCache (context: HttpContextContract, axiosPromise: Promise<any>, key: string, expiration: number) {
  try {
    const redisData = await Redis.get(key)
    if (redisData === null){
      try {
        const { data } = await axiosPromise
        await Redis.setex(key, expiration, JSON.stringify(data))
        return context.response.status(200).send(data)
      } catch (err){
        return context.response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
      }
    }
    return context.response.status(200).send(redisData)
  } catch (err) {
    return context.response.status(500).json({status: 500, error: 'Server error'})
  }
}

export default class TmdbsController {
  public async getTrending (context: HttpContextContract) {
    return handleRequestWithCache(context, tmdbApi.getTrending(), 'trending', 43200)
  }

  public async getNextInTheaters (context: HttpContextContract) {
    return handleRequestWithCache(context, tmdbApi.getNextInTheaters(), 'nextInTheaters', 43200)
  }

  public async getGenresList (context: HttpContextContract) {
    return handleRequestWithCache(context, tmdbApi.getGenresList(), 'genreList', 86400)
  }

  public async getMovieDetails (context: HttpContextContract) {
    return handleRequestWithCache(context, tmdbApi.getMovieDetails(context.params.id), context.params.id, 10800)
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
