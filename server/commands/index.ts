import { listDirectoryFiles } from '@adonisjs/core/build/standalone'
import Application from '@ioc:Adonis/Core/Application'

export default listDirectoryFiles(__dirname, Application.appRoot, ['./commands/index'])
