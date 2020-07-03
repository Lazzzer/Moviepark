import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import MovieUser from 'App/Models/MovieUser'

export default class WatchlistsController {
  public async addMovie ({ auth, request}: HttpContextContract) {
    const { movieId } = request.all()

    return await MovieUser.firstOrCreate({
      userId: auth.user!.id,
      movieId: movieId,
    }, {
      userId: auth.user!.id,
      movieId: movieId,
    })
  }

  public async updateMovie ({ auth, request, response}: HttpContextContract) {
    const { movieId, watched } = request.all()

    const query = await MovieUser.query().where('user_id', auth.user!.id).where('movie_id', movieId).update({ watched: watched})

    return query[0] === 1 ? response.ok({status:201, message:'Updated successfully'}) : response.ok({status:204, message:'No update'})
  }

  public async getList ({ auth }: HttpContextContract) {
    return await Database.from('movie_users')
      .select('movie_id', 'watched', 'created_at', 'updated_at')
      .where('user_id', auth.user!.id)
      .orderBy('created_at', 'desc')
  }
}
