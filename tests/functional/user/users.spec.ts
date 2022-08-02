import { test } from '@japa/runner'

test.group('Users users', () => {
  test('It should be create a user', async ({ client }) => {
    const response = await client
      .post('/users')
      .json({ name: 'Alberto Paiva', phone: '55 9 9999-9999', password: '123456' })

    response.assertStatus(201)
    response.assertBodyContains({
      name: 'Alberto Paiva',
      phone: '55 9 9999-9999',
      password: '123456',
    })
  })
})
