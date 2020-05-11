import tmdbApi from '../services/TmdbService'
require('dotenv').config()

const express = require('express')
const app = express()

// eslint-disable-next-line space-before-function-paren
app.get('/trending', async (req, res) => {
  try {
    const { data } = await tmdbApi.getTrending()
    res.send(data)
  } catch (err) {
    res.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
  }
})

app.get('/hello2', (req, res) => {
  res.send('hello2')
})

app.get('/hello3', (req, res) => {
  console.log('hello3')
  res.send('hello3')
})

module.exports = {
  path: '/tmdb/',
  handler: app
}
