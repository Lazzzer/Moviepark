import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  PORT: Env.schema.number(),
  HOST: Env.schema.string({ format: 'host' }),
  APP_NAME: Env.schema.string(),
  APP_KEY: Env.schema.string(),
  TMDB_API_KEY: Env.schema.string(),
  UTELLY_API_KEY: Env.schema.string(),
  CLIENT_URL: Env.schema.string(),
  CLIENT_BROWSER_URL: Env.schema.string(),
  CLIENT_WWW_BROWSER_URL: Env.schema.string(),
  REDIS_CONNECTION: Env.schema.string(),
  REDIS_HOST: Env.schema.string(),
  REDIS_PORT: Env.schema.string(),
  REDIS_PASSWORD: Env.schema.string(),
  DB_HOST: Env.schema.string(),
  DB_CONNECTION: Env.schema.string(),
  DB_USER: Env.schema.string(),
  DB_PASSWORD: Env.schema.string(),
  DB_NAME: Env.schema.string(),
  SESSION_DRIVER: Env.schema.string(),
  COOKIE_DOMAIN: Env.schema.string(),
})
