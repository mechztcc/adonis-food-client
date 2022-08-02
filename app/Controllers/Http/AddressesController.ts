import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address'
import CreateAddressValidator from 'App/Validators/CreateAddressValidator'

export default class AddressesController {
  public async store({ request, response, auth }: HttpContextContract) {
    const user = auth.user
    const payload = await request.validate(CreateAddressValidator)

    const address = await Address.create({
      zip: payload.zip,
      number: payload.number,
      state: payload.state,
      street: payload.street,
			complement: payload.complement,
			obs: payload.obs,
			userId: user?.$attributes.id
    })

    return response.accepted(address)
  }
}
