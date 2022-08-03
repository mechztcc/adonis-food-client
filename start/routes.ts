import Route from '@ioc:Adonis/Core/Route'

import './users/users.routes'
import './sessions/sessions.routes'
import './addresses/addresses.routes'
import './stores/stores.routes'

Route.get('/', async () => {
  return { hello: 'world' }
})
