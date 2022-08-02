import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateSessionValidator from 'App/Validators/CreateSessionValidator'

export default class SessionsController {
  public async store({ request, respose, auth }: HttpContextContract) {
    const payload = await request.validate(CreateSessionValidator)

  }
}
