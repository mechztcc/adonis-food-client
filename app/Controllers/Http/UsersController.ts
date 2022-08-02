import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BadRequestException from 'App/Exceptions/BadRequestException'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator)

    const user = await User.findBy('phone', payload.phone)
    if (user) {
      throw new BadRequestException('Phone has already in use', 409)
    }

    const newUser = await User.create(payload)
    return response.created(newUser)
  }
}
