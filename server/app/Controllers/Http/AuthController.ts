import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async register ({ auth, request, response }: HttpContextContract) {
    const validationSchema = schema.create({
      username: schema.string({ trim: true }, [
        rules.minLength(3),
        rules.maxLength(60),
        rules.required(),
        rules.unique({ table: 'users', column: 'username' }),
      ]),
      password: schema.string({ trim: true }, [
        rules.minLength(5),
        rules.required(),
        rules.confirmed(),
      ]),
    })

    const userDetails = await request.validate({
      schema: validationSchema,
    })

    const user = new User()
    user.username = userDetails.username
    user.password = userDetails.password
    await user.save()

    await auth.login(user)
    return response.created({status:201, message:'User created & logged', username: user.username})
  }

  public async login ({ auth, request }: HttpContextContract) {
    const validationSchema = schema.create({
      username: schema.string({ trim: true }, [
        rules.required(),
      ]),
      password: schema.string({ trim: true }, [
        rules.required(),
      ]),
    })

    const userDetails = await request.validate({
      schema: validationSchema,
    })

    return await auth.attempt(userDetails.username, userDetails.password)
  }

  public async logout ({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.created({status:200, message:'User logged out'})
  }

  public async check ({ auth, response }: HttpContextContract) {
    const user = await auth.authenticate()
    return response.accepted({status:202, message:'User authenticated', username: user.username})
  }
}
