import schedule from 'node-schedule'
import tmdbApi from './TmdbService'
import fs from 'fs'
import path from 'path'

export function updateGenresList () {
  schedule.scheduleJob('0 0 * * *', async () => {
    console.log('Updating genres list...')
    const { data } = await tmdbApi.getGenresList()
    fs.writeFileSync(path.join(__dirname,'../Files/genreslist.json'), JSON.stringify(data))
    console.log('Updated!')
  })
}
