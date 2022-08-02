import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BadRequestException from 'App/Exceptions/BadRequestException'
import User from 'App/Models/User'
import CreateSessionValidator from 'App/Validators/CreateSessionValidator'

export default class SessionsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const payload = await request.validate(CreateSessionValidator)

    const user = await User.findBy('phone', payload.phone)
    if (!user) {
      throw new BadRequestException('User not found with this phone number', 409)
    }

    const token = await auth
      .use('api')
      .attempt(payload.phone, payload.password, { expiresIn: '2hours' })

    return response.accepted({ user, token })
  }
}
