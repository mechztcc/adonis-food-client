import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BadRequestException from 'App/Exceptions/BadRequestException'
import axios from 'axios'

export default class StoresController {
  public async index({ request, response }: HttpContextContract) {
    const { page } = request.qs()

    const api = process.env.API_FOODOWNER
    const url = `${api}/stores?page=${page}`
    const res = await axios.get(url).catch((err) => {
      if (err.code === 'ECONNREFUSED') {
        throw new BadRequestException('ECONNREFUSED, possibly the access server is having problems.', 409)
      }
    })
    if(res?.data) {
      return response.status(200).json(res.data)
    }
    
  }
}
