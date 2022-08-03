import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ApiController {
  public async check({ request, response }: HttpContextContract) {
    return response.accepted({
      status: 'On',
      api: process.env.API_FOODOWNER,
      port: process.env.API_PORT,
    })
  }
}
