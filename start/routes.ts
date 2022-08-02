import Route from '@ioc:Adonis/Core/Route'

import './users/users.routes'
import './sessions/sessions.routes'

Route.get('/', async () => {
  return { hello: 'world' }
})
