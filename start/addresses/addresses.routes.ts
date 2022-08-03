import Route from '@ioc:Adonis/Core/Route'

Route.post('/addresses', 'AddressesController.store').middleware('auth')
Route.get('/addresses', 'AddressesController.findByLoggedUser').middleware('auth')
