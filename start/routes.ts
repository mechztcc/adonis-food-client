import Route from '@ioc:Adonis/Core/Route'

import './users/users.routes'

Route.get('/', async () => {
  return { hello: 'world' }
})
