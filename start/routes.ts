import Route from '@ioc:Adonis/Core/Route'

import './addresses/addresses.routes'
import './sessions/sessions.routes'
import './stores/stores.routes'
import './users/users.routes'

Route.get('/check', 'ApiController.check')
