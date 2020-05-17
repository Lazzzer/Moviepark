import { IocContract } from '@adonisjs/fold'
import { updateGenresList } from '../app/Services/SchedulerService'

export default class AppProvider {
  constructor (protected $container: IocContract) {
  }

  public register () {
    // Register your own bindings
  }

  public boot () {
    // IoC container is ready
  }

  public shutdown () {
    // Cleanup, since app is going down
  }

  public ready () {
    // App is ready
    updateGenresList ()
  }
}
