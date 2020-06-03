import schedule from 'node-schedule'
import tmdbApi from './TmdbService'
import {promises as fs } from 'fs'
import path from 'path'

export function updateGenresList () {
  schedule.scheduleJob('0 0 * * *', async () => {
    console.log('Updating genres list...')
    try {
      const { data } = await tmdbApi.getGenresList()
      await fs.writeFile(path.join(__dirname,'../Files/genreslist.json'), JSON.stringify(data))
      console.log('Updated!')
    } catch (err) {
      console.log(err)
    }
  })
}
