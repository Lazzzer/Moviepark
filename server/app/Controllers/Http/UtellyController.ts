import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import utellyApi from '../../Services/UtellyService'
import Redis from '@ioc:Adonis/Addons/Redis'

export default class UtellyController {
  public async getStreamingServicesById (context: HttpContextContract) {
    try {
      const redisData = await Redis.connection().get(context.params.id + '-utelly')
      if (redisData === null){
        try {
          const { data } = await utellyApi.getStreamingServicesById(context.params.id)
          await Redis.connection().setex(context.params.id + '-utelly', 1209600, JSON.stringify(data))
          return context.response.status(200).send(data)
        } catch (err){
          console.log(err.response)
          return context.response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
        }
      }
      return context.response.status(200).send(redisData)
    } catch (err) {
      return context.response.status(500).json({status: 500, error: 'Server ror'})
    }
  }
}
