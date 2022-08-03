import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'

test.group('Address address', () => {
  test('It should be create a address with success', async ({ client }) => {
    const user = await UserFactory.merge({ password: '123456' }).create()

    const address = {
      zip: '54322',
      number: '23',
      state: 'PE',
      street: 'Av. br 255',
      complement: 'APT',
      obs: 'come fast',
    }

    const response = await client.post('/addresses').loginAs(user).json(address)

    response.assertStatus(201)
    response.assertBodyContains({ id: 1 })
  })
})
