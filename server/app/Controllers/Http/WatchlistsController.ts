import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import MovieUser from 'App/Models/MovieUser'

export default class WatchlistsController {
  public async addMovie ({ auth, request, response}: HttpContextContract) {
    const validationSchema = schema.create({
      movieId: schema.number([
        rules.required(),
        rules.unsigned(),
      ]),
    })

    const payload = await request.validate({
      schema: validationSchema,
    })

    try {
      await MovieUser.firstOrCreate({
        userId: auth.user!.id,
        movieId: payload.movieId,
      }, {
        userId: auth.user!.id,
        movieId: payload.movieId,

      })

      return response.created({status:204, message:'Movie added'})
    } catch (err) {
      return response.status(500).json({status: 500, error: 'Server error'})
    }
  }

  public async updateMovie ({ auth, request, response}: HttpContextContract) {
    const validationSchema = schema.create({
      movieId: schema.number([
        rules.required(),
        rules.unsigned(),
      ]),
      watched: schema.boolean([
        rules.required(),
      ]),
    })

    const payload = await request.validate({
      schema: validationSchema,
    })

    try {
      const query = await MovieUser.query().where('user_id', auth.user!.id).where('movie_id', payload.movieId).update({ watched: payload.watched, updated_at: new Date()})
      return query[0] === 1 ? response.ok({status:200, message:'Updated successfully'}) : response.ok({status:204, message:'No update'})
    } catch (err) {
      console.log(err)
      return response.status(500).json({status: 500, error: 'Server error'})
    }
  }

  public async deleteMovie ({ auth, request, response}: HttpContextContract) {
    const validationSchema = schema.create({
      movieId: schema.number([
        rules.required(),
        rules.unsigned(),
      ]),
    })

    const payload = await request.validate({
      schema: validationSchema,
    })
    try {
      const query = await MovieUser.query().where('user_id', auth.user!.id).where('movie_id', payload.movieId).delete()
      return query[0] === 1 ? response.ok({status:200, message:'Deleted successfully'}) : response.ok({status:204, message:'No delete'})
    } catch (err) {
      return response.status(500).json({status: 500, error: 'Server error'})
    }
  }

  public async getList ({ auth }: HttpContextContract) {
    return await Database.from('movie_users')
      .select('movie_id', 'watched', 'created_at', 'updated_at')
      .where('user_id', auth.user!.id)
      .orderBy('updated_at', 'desc')
  }
}
