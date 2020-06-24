import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import utellyApi from '../../Services/UtellyService'

export default class UtellyController {
  public async getStreamingServicesById (context: HttpContextContract) {
    try {
      const { data } = await utellyApi.getStreamingServicesById(context.params.source_id, context.params.country)
      context.response.status(200).send(data)
    } catch (err) {
      console.log(err.response)
      context.response.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
    }
  }

  public async getStreamingServicesByIdDummy (context: HttpContextContract) {
    const data = {
      'collection': {
        'id': '5e28ec21e847f9277fa057ff',
        'picture': 'https://utellyassets9-1.imgix.net/api/Images/baaacebbadc73b5a2bf37486c31452b6/Redirect',
        'name': 'Captain Marvel',
        'locations': [
          {
            'icon': 'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAUS.png?w=92&auto=compress&app_version=ae3576e2-0796-4eda-b953-80cadc8e2619_eww2020-06-24',
            'country': [
              'us',
            ],
            'display_name': 'iTunes',
            'name': 'iTunesIVAUS',
            'id': '5d80a9a5d51bef861d3740d3',
            'url': 'https://itunes.apple.com/us/movie/captain-marvel/id1453792625',
          },
          {
            'icon': 'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAUS.png?w=92&auto=compress&app_version=ae3576e2-0796-4eda-b953-80cadc8e2619_eww2020-06-24',
            'country': [
              'us',
            ],
            'display_name': 'Amazon Instant Video',
            'name': 'AmazonInstantVideoIVAUS',
            'id': '5d82609332ac2f0051962fe6',
            'url': 'https://www.amazon.com/gp/video/detail/amzn1.dv.gti.54b49dc7-7f71-f0dc-c042-ec07c531b912?creativeASIN=B07P68CT1Q&ie=UTF8&linkCode=xm2&tag=utellycom00-21',
          },
          {
            'icon': 'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAUS.png?w=92&auto=compress&app_version=ae3576e2-0796-4eda-b953-80cadc8e2619_eww2020-06-24',
            'country': [
              'us',
            ],
            'display_name': 'Google Play',
            'name': 'GooglePlayIVAUS',
            'id': '5d8260b128fbcd0052aed197',
            'url': 'https://play.google.com/store/movies/details/Marvel_Studios_Captain_Marvel?gl=US&hl=en&id=qBSJ9WwMMTI',
          },
          {
            'icon': 'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/DisneyPlusIVAUS.png?w=92&auto=compress&app_version=ae3576e2-0796-4eda-b953-80cadc8e2619_eww2020-06-24',
            'country': [
              'us',
            ],
            'display_name': 'Disney+',
            'name': 'DisneyPlusIVAUS',
            'id': '5e220e9036f2f6c40e974ed6',
            'url': 'https://www.disneyplus.com/movies/marvel-studios-captain-marvel/38xJGlLAQy9a',
          },
          {
            'icon': 'https://utellyassets7.imgix.net/locations_icons/utelly/black_new/VuduIVAUS.png?w=92&auto=compress&app_version=ae3576e2-0796-4eda-b953-80cadc8e2619_eww2020-06-24',
            'country': [
              'us',
            ],
            'display_name': 'VuduIVAUS',
            'name': 'VuduIVAUS',
            'id': '5ed5ac7e213e81d5dc8797a2',
            'url': 'https://www.vudu.com/content/movies/details/Captain-Marvel/1009797',
          },
        ],
        'provider': 'iva',
        'weight': 0,
        'source_ids': {
          'tmdb': {
            'url': 'https://www.themoviedb.org/movie/299537',
            'id': '299537',
          },
        },
      },
      'type': 'tmdb',
      'id': '299537',
      'status_code': 200,
      'variant': 'ivafull',
    }
    context.response.status(200).send(data)
  }
}

