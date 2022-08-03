import { test } from '@japa/runner'

test.group('Stores stores', () => {
  test('It should be find stores in external api', async ({ client }) => {
    const response = await client.get('/stores')

    response.assertStatus(200)
  })
})
