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

  test('It should be return 401 when try to create address with no auth token provider', async ({
    client,
  }) => {
    const user = await UserFactory.merge({ password: '123456' }).create()

    const address = {
      zip: '54322',
      number: '23',
      state: 'PE',
      street: 'Av. br 255',
      complement: 'APT',
      obs: 'come fast',
    }

    const response = await client.post('/addresses').json(address)

    response.assertStatus(401)
    response.assertBodyContains({
      errors: [{ message: 'E_UNAUTHORIZED_ACCESS: Unauthorized access' }],
    })
  })

  test('It should be  return all addresses by logged user', async ({ client }) => {
    const user = await UserFactory.merge({ password: '123456' }).create()

    const response = await client.get('/addresses').loginAs(user)
    response.assertStatus(200)
  })

  test('It should be return 401 when try to find address with no auth token provided', async ({
    client,
  }) => {
    const response = await client.get('/addresses')

    response.assertStatus(401)
    response.assertBodyContains({
      errors: [{ message: 'E_UNAUTHORIZED_ACCESS: Unauthorized access' }],
    })
  })
})
