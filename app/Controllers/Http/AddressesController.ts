import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class AddressesController {
    public async store({ request, response, auth }: HttpContextContract ) {
			const user = await auth.user
			console.log(user);

			return response.accepted(user)
			
		}
}
