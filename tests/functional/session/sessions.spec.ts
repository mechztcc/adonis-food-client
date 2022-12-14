import { test } from '@japa/runner'
import { UserFactory } from 'Database/factories'

test.group('Sessions sessions', () => {
  test('It should be create session to a valid user', async ({ client }) => {
    const user = await UserFactory.merge({ password: '123456' }).create()

    const response = await client
      .post('/sessions')
      .json({ phone: user.$attributes.phone, password: '123456' })

    response.assertStatus(201)
    response.assertBodyContains({ token: { type: 'bearer' } })
  })

  test('It should be return 404 when user has not found', async ({ client }) => {
    const user = await UserFactory.create()

    const response = await client
      .post('/sessions')
      .json({ phone: 'invalid-phone-number', password: '123456' })

    response.assertBodyContains({
      code: 'BAD_REQUEST',
      message: 'User not found with this phone number',
      status: 404
    })
  })
})
