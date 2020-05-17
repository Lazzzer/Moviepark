import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import tmdbApi from '../../Services/TmdbService'
import fs from 'fs'
import path from 'path'

export default class TmdbsController {
  public async getTrending ({ response }:HttpContextContract) {
    try {
      const { data } = await tmdbApi.getTrending()
      response.status(200).send(data)
    } catch (err) {
      console.log(err.response)
      response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
    }
  }

  public async getNextInTheaters ({ response }:HttpContextContract) {
    try {
      const { data } = await tmdbApi.getNextInTheaters()
      response.status(200).send(data)
    } catch (err) {
      console.log(err.response)
      response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
    }
  }

  public async getGenresList ({ response }:HttpContextContract) {
    const genresList:any = fs.readFileSync(path.join(__dirname,'../../Files/genreslist.json'))
    response.status(200).json(JSON.parse(genresList))
  }

  public async getMovieDetails ({ response, params }:HttpContextContract) {
    try {
      const { data } = await tmdbApi.getMovieDetails(params.id)
      response.status(200).send(data)
    } catch (err) {
      console.log(err.response)
      response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
    }
  }

  //SEARCH

  public async getPersonId ({ response, params }:HttpContextContract) {
    try {
      const { data } = await tmdbApi.getPersonId(params.query)
      response.status(200).send(data)
    } catch (err) {
      console.log(err.response)
      response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
    }
  }

  public async getSearchDefaultMovieList ({ response, params }:HttpContextContract) {
    try {
      const { data } = await tmdbApi.getSearchDefaultMovieList(params.page)
      response.status(200).send(data)
    } catch (err) {
      console.log(err.response)
      response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
    }
  }

  public async getSearchedByNameMovieList ({ response, params }:HttpContextContract) {
    try {
      const { data } = await tmdbApi.getSearchedByNameMovieList(params.name, params.page)
      response.status(200).send(data)
    } catch (err) {
      console.log(err.response)
      response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
    }
  }

  public async getSearchedWithFiltersMovieList ({ response, params }:HttpContextContract) {
    try {
      const { data } = await tmdbApi.getSearchedWithFiltersMovieList(params.query)
      response.status(200).send(data)
    } catch (err) {
      console.log(err.response)
      response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
    }
  }
}
