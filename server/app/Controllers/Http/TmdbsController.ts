import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import tmdbApi from '../../Services/TmdbService'
import {promises as fs } from 'fs'
import path from 'path'
import Redis from '@ioc:Adonis/Addons/Redis'

async function handleRequest (context: HttpContextContract, axiosPromise: Promise<any>) {
  try {
    const { data } = await axiosPromise
    context.response.status(200).send(data)
  } catch (err) {
    console.log(err.response)
    context.response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
  }
}

async function handleRequestWithCache (context: HttpContextContract, axiosPromise: Promise<any>, key: string, expiration: number) {
  try {
    const redisData = await Redis.connection().get(key)
    if (redisData === null){
      try {
        const { data } = await axiosPromise
        await Redis.connection().setex(key, expiration, JSON.stringify(data))
        return context.response.status(200).send(data)
      } catch (err){
        console.log(err.response)
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

  public async getGenresList ({ response }: HttpContextContract) {
    try {
      const genresList = await fs.readFile(path.join(__dirname,'../../Files/genreslist.json'), 'utf-8')
      response.status(200).json(JSON.parse(genresList))
    } catch (err) {
      response.status(500).json({ status: 500, error: 'Server error' })
    }
  }

  public async getMovieDetails (context: HttpContextContract) {
    if (!isNaN(context.params.id)) {
      return handleRequestWithCache(context, tmdbApi.getMovieDetails(context.params.id), context.params.id, 10800)
    }
    return context.response.status(404).json({status: 404, error: 'Not Found'})
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
