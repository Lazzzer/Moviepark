/* eslint-disable space-before-function-paren */
import tmdbApi from '../services/TmdbService'
require('dotenv').config()

const express = require('express')
const app = express()

app.get('/trending', async (req, res) => {
  try {
    const { data } = await tmdbApi.getTrending()
    res.send(data)
  } catch (err) {
    res.status(err.response.status).json({ status: err.response.status, error: err.responsestatusText })
  }
})

app.get('/nextTheaters', async (req, res) => {
  try {
    const { data } = await tmdbApi.getNextInTheaters()
    res.send(data)
  } catch (err) {
    res.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
  }
})

app.get('/genresList', async (req, res) => {
  try {
    const { data } = await tmdbApi.getGenresList()
    res.send(data)
  } catch (err) {
    res.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
  }
})

app.get('/person/:query', async (req, res) => {
  try {
    const { data } = await tmdbApi.getPersonId(req.params.query)
    res.send(data)
  } catch (err) {
    res.status(err.response.status).json({ status: err.response.status, error: err.response.statusText })
  }
})

app.get('/trendingDummy', (req, res) => {
  res.status(200).json(
    {
      page: 1,
      results: [
        {
          id: 545609,
          video: false,
          vote_count: 1737,
          vote_average: 7.5,
          title: 'Extraction',
          release_date: '2020-04-24',
          original_language: 'en',
          original_title: 'Extraction',
          genre_ids: [
            28,
            18,
            53
          ],
          backdrop_path: '/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg',
          adult: false,
          overview: 'Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord…',
          poster_path: '/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg',
          popularity: 235.61,
          media_type: 'movie'
        },
        {
          id: 181812,
          video: false,
          vote_count: 4477,
          vote_average: 3.5,
          title: 'Star Wars: The Rise of Skywalker',
          release_date: '2019-12-18',
          original_language: 'en',
          original_title: 'Star Wars: The Rise of Skywalker',
          genre_ids: [
            28,
            12,
            878
          ],
          backdrop_path: '/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg',
          adult: false,
          overview: 'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
          poster_path: '/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
          popularity: 122.295,
          media_type: 'movie'
        },
        {
          id: 481848,
          video: false,
          vote_count: 924,
          vote_average: 7.3,
          title: 'The Call of the Wild',
          release_date: '2020-02-19',
          original_language: 'en',
          original_title: 'The Call of the Wild',
          genre_ids: [
            12,
            18,
            10751
          ],
          backdrop_path: '/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg',
          adult: false,
          overview: 'Buck is a big-hearted dog whose blissful domestic life is turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Yukon during the Gold Rush of the 1890s. As the newest rookie on a mail delivery dog sled team—and later its leader—Buck experiences the adventure of a lifetime, ultimately finding his true place in the world and becoming his own master.',
          poster_path: '/33VdppGbeNxICrFUtW2WpGHvfYc.jpg',
          popularity: 188.362,
          media_type: 'movie'
        },
        {
          id: 495764,
          video: false,
          vote_count: 3682,
          vote_average: 7.2,
          title: 'Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)',
          release_date: '2020-02-05',
          original_language: 'en',
          original_title: 'Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)',
          genre_ids: [
            28,
            35,
            80
          ],
          backdrop_path: '/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg',
          adult: false,
          overview: 'Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.',
          poster_path: '/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg',
          popularity: 171.725,
          media_type: 'movie'
        },
        {
          id: 454626,
          video: false,
          vote_count: 3740,
          vote_average: 7.6,
          title: 'Sonic the Hedgehog',
          release_date: '2020-02-12',
          original_language: 'en',
          original_title: 'Sonic the Hedgehog',
          genre_ids: [
            28,
            35,
            878,
            10751
          ],
          backdrop_path: '/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg',
          adult: false,
          overview: 'Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.',
          poster_path: '/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg',
          popularity: 185.116,
          media_type: 'movie'
        },
        {
          id: 38700,
          video: false,
          vote_count: 3792,
          vote_average: 7.2,
          title: 'Bad Boys for Life',
          release_date: '2020-01-15',
          original_language: 'en',
          original_title: 'Bad Boys for Life',
          genre_ids: [
            28,
            80,
            53
          ],
          backdrop_path: '/upUy2QhMZEmtypPW3PdieKLAHxh.jpg',
          adult: false,
          overview: 'Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.',
          poster_path: '/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg',
          popularity: 110.276,
          media_type: 'movie'
        },
        {
          id: 530915,
          video: false,
          vote_count: 4744,
          vote_average: 8.0,
          title: '1917',
          release_date: '2019-12-25',
          original_language: 'en',
          original_title: '1917',
          genre_ids: [
            28,
            18,
            36,
            53,
            10752
          ],
          backdrop_path: '/2lBOQK06tltt8SQaswgb8d657Mv.jpg',
          adult: false,
          overview: 'At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.',
          poster_path: '/iZf0KyrE25z1sage4SYFLCCrMi9.jpg',
          popularity: 118.797,
          media_type: 'movie'
        },
        {
          id: 338762,
          video: false,
          vote_count: 2146,
          vote_average: 7.1,
          title: 'Bloodshot',
          release_date: '2020-03-05',
          original_language: 'en',
          original_title: 'Bloodshot',
          genre_ids: [
            28,
            18,
            878
          ],
          backdrop_path: '/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg',
          adult: false,
          overview: "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
          poster_path: '/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
          popularity: 204.378,
          media_type: 'movie'
        },
        {
          id: 443791,
          video: false,
          vote_count: 1050,
          vote_average: 6.4,
          title: 'Underwater',
          release_date: '2020-01-08',
          original_language: 'en',
          original_title: 'Underwater',
          genre_ids: [
            28,
            27,
            878,
            53
          ],
          backdrop_path: '/ww7eC3BqSbFsyE5H5qMde8WkxJ2.jpg',
          adult: false,
          overview: 'After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.',
          poster_path: '/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg',
          popularity: 96.883,
          media_type: 'movie'
        },
        {
          id: 618344,
          video: false,
          vote_count: 270,
          vote_average: 8.8,
          title: 'Justice League Dark: Apokolips War',
          release_date: '2020-05-05',
          original_language: 'en',
          original_title: 'Justice League Dark: Apokolips War',
          genre_ids: [
            28,
            12,
            16,
            14,
            878
          ],
          backdrop_path: '/sQkRiQo3nLrQYMXZodDjNUJKHZV.jpg',
          adult: false,
          overview: 'Earth is decimated after intergalactic tyrant Darkseid has devastated the Justice League in a poorly executed war by the DC Super Heroes. Now the remaining bastions of good – the Justice League, Teen Titans, Suicide Squad and assorted others – must regroup, strategize and take the war to Darkseid in order to save the planet and its surviving inhabitants.',
          poster_path: '/c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg',
          popularity: 170.924,
          media_type: 'movie'
        },
        {
          id: 539537,
          video: false,
          vote_count: 657,
          vote_average: 6.1,
          title: 'Fantasy Island',
          release_date: '2020-02-12',
          original_language: 'en',
          original_title: 'Fantasy Island',
          genre_ids: [
            14,
            27,
            878
          ],
          backdrop_path: '/x80ZIVGUJ6plcUBcgVZ6DPKT7vc.jpg',
          adult: false,
          overview: 'A group of contest winners arrive at an island hotel to live out their dreams, only to find themselves trapped in nightmare scenarios.',
          poster_path: '/8ZMrZGGW65ePWIgRn1260nA1uUm.jpg',
          popularity: 83.05,
          media_type: 'movie'
        },
        {
          id: 11,
          video: false,
          vote_count: 13546,
          vote_average: 8.2,
          title: 'Star Wars',
          release_date: '1977-05-25',
          original_language: 'en',
          original_title: 'Star Wars',
          genre_ids: [
            28,
            12,
            878
          ],
          backdrop_path: '/pPj1yM2PXiC56GkUYmoT3qR9zka.jpg',
          adult: false,
          overview: 'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
          poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
          popularity: 79.861,
          media_type: 'movie'
        },
        {
          id: 512200,
          video: false,
          vote_count: 3638,
          vote_average: 6.9,
          title: 'Jumanji: The Next Level',
          release_date: '2019-12-04',
          original_language: 'en',
          original_title: 'Jumanji: The Next Level',
          genre_ids: [
            12,
            35,
            14
          ],
          backdrop_path: '/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg',
          adult: false,
          overview: 'As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.',
          poster_path: '/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
          popularity: 73.329,
          media_type: 'movie'
        },
        {
          id: 448119,
          video: false,
          vote_count: 1452,
          vote_average: 6.8,
          title: 'Dolittle',
          release_date: '2020-01-01',
          original_language: 'en',
          original_title: 'Dolittle',
          genre_ids: [
            12,
            35,
            14,
            10751
          ],
          backdrop_path: '/xcUf6yIheo78btFqihlRLftdR3M.jpg',
          adult: false,
          overview: 'After losing his wife seven years earlier, the eccentric Dr. John Dolittle, famed doctor and veterinarian of Queen Victoria’s England, hermits himself away behind the high walls of Dolittle Manor with only his menagerie of exotic animals for company. But when the young queen falls gravely ill, a reluctant Dolittle is forced to set sail on an epic adventure to a mythical island in search of a cure, regaining his wit and courage as he crosses old adversaries and discovers wondrous creatures.',
          poster_path: '/uoplwswBDy7gsOyrbGuKyPFoPCs.jpg',
          popularity: 86.455,
          media_type: 'movie'
        },
        {
          id: 299534,
          video: false,
          vote_count: 12999,
          vote_average: 8.3,
          title: 'Avengers: Endgame',
          release_date: '2019-04-24',
          original_language: 'en',
          original_title: 'Avengers: Endgame',
          genre_ids: [
            28,
            12,
            878
          ],
          backdrop_path: '/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg',
          adult: false,
          overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
          poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
          popularity: 42.98,
          media_type: 'movie'
        },
        {
          id: 689723,
          video: false,
          vote_count: 256,
          vote_average: 6.4,
          title: 'Dangerous Lies',
          release_date: '2020-04-30',
          original_language: 'en',
          original_title: 'Dangerous Lies',
          genre_ids: [
            53
          ],
          backdrop_path: '/tuqv0jb0o7sBOivgkagKJHuO6X4.jpg',
          adult: false,
          overview: "After losing her waitressing job, Katie Franklin takes a job as a caretaker to a wealthy elderly man in his sprawling, empty Chicago estate. The two grow close, but when he unexpectedly passes away and names Katie as his sole heir, she and her husband Adam are pulled into a complex web of lies, deception, and murder. If she's going to survive, Katie will have to question everyone's motives — even the people she loves.",
          poster_path: '/x0g9tzgZKKmNEtwcjS3aF4kduRi.jpg',
          popularity: 74.321,
          media_type: 'movie'
        },
        {
          id: 475557,
          video: false,
          vote_count: 12276,
          vote_average: 8.2,
          title: 'Joker',
          release_date: '2019-10-02',
          original_language: 'en',
          original_title: 'Joker',
          genre_ids: [
            80,
            18,
            53
          ],
          backdrop_path: '/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg',
          adult: false,
          overview: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
          poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
          popularity: 95.66,
          media_type: 'movie'
        },
        {
          id: 496243,
          video: false,
          vote_count: 7141,
          vote_average: 8.5,
          title: 'Parasite',
          release_date: '2019-05-30',
          original_language: 'ko',
          original_title: '기생충',
          genre_ids: [
            35,
            18,
            53
          ],
          backdrop_path: '/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg',
          adult: false,
          overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
          poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
          popularity: 126.935,
          media_type: 'movie'
        },
        {
          id: 508439,
          video: false,
          vote_count: 1659,
          vote_average: 7.9,
          title: 'Onward',
          release_date: '2020-02-29',
          original_language: 'en',
          original_title: 'Onward',
          genre_ids: [
            12,
            16,
            35,
            14,
            10751
          ],
          backdrop_path: '/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg',
          adult: false,
          overview: 'In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.',
          poster_path: '/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg',
          popularity: 71.73,
          media_type: 'movie'
        },
        {
          id: 474764,
          video: false,
          vote_count: 130,
          vote_average: 6.2,
          title: 'The Lodge',
          release_date: '2020-01-16',
          original_language: 'en',
          original_title: 'The Lodge',
          genre_ids: [
            18,
            27,
            53
          ],
          backdrop_path: '/2hV2clTCW55dwTLCZcOvvidjjrV.jpg',
          adult: false,
          overview: "When a father is forced to abruptly depart for work, he leaves his children, Aidan and Mia, at their holiday home in the care of his new girlfriend, Grace. Isolated and alone, a blizzard traps them inside the lodge as terrifying events summon specters from Grace's dark past.",
          poster_path: '/yake2myhbW7c6dKbmwYDy1i40bm.jpg',
          popularity: 53.139,
          media_type: 'movie'
        }
      ],
      total_pages: 1000,
      total_results: 20000
    }
  )
})

app.get('/nextTheatersDummy', (req, res) => {
  res.status(200).json(
    {
      results: [
        {
          popularity: 188.362,
          vote_count: 924,
          video: false,
          poster_path: '/33VdppGbeNxICrFUtW2WpGHvfYc.jpg',
          id: 481848,
          adult: false,
          backdrop_path: '/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg',
          original_language: 'en',
          original_title: 'The Call of the Wild',
          genre_ids: [
            12,
            18,
            10751
          ],
          title: 'The Call of the Wild',
          vote_average: 7.3,
          overview: 'Buck is a big-hearted dog whose blissful domestic life is turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Yukon during the Gold Rush of the 1890s. As the newest rookie on a mail delivery dog sled team—and later its leader—Buck experiences the adventure of a lifetime, ultimately finding his true place in the world and becoming his own master.',
          release_date: '2020-02-19'
        },
        {
          popularity: 74.666,
          vote_count: 2874,
          video: false,
          poster_path: '/8ZX18L5m6rH5viSYpRnTSbb9eXh.jpg',
          id: 619264,
          adult: false,
          backdrop_path: '/3tkDMNfM2YuIAJlvGO6rfIzAnfG.jpg',
          original_language: 'es',
          original_title: 'El hoyo',
          genre_ids: [
            18,
            878
          ],
          title: 'The Platform',
          vote_average: 7.1,
          overview: 'A mysterious place, an indescribable prison, a deep hole. An unknown number of levels. Two inmates living on each level. A descending platform containing food for all of them. An inhuman fight for survival, but also an opportunity for solidarity…',
          release_date: '2019-11-08'
        },
        {
          popularity: 68.822,
          vote_count: 245,
          video: false,
          poster_path: '/sm8iVzA7kRp0d4BSIsgXjsSBMKV.jpg',
          id: 556678,
          adult: false,
          backdrop_path: '/5GbkL9DDRzq3A21nR7Gkv6cFGjq.jpg',
          original_language: 'en',
          original_title: 'Emma.',
          genre_ids: [
            35,
            18,
            10749
          ],
          title: 'Emma.',
          vote_average: 7.1,
          overview: 'In 1800s England, a well-meaning but selfish young woman meddles in the love lives of her friends.',
          release_date: '2020-02-13'
        },
        {
          popularity: 67.717,
          vote_count: 622,
          video: false,
          poster_path: '/wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg',
          id: 514847,
          adult: false,
          backdrop_path: '/qfQ78ZKiouoM2yhAnfNblp9ijQE.jpg',
          original_language: 'en',
          original_title: 'The Hunt',
          genre_ids: [
            28,
            27,
            53
          ],
          title: 'The Hunt',
          vote_average: 6.8,
          overview: "Twelve strangers wake up in a clearing. They don't know where they are—or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted turns the tables on her pursuers.",
          release_date: '2020-03-11'
        },
        {
          popularity: 35.378,
          vote_count: 322,
          video: false,
          poster_path: '/dqA2FCzz4OMmXLitKopzf476RVB.jpg',
          id: 585244,
          adult: false,
          backdrop_path: '/ezcf15gSuZmW51N5yiqE3tWg9zu.jpg',
          original_language: 'en',
          original_title: 'I Still Believe',
          genre_ids: [
            18,
            10402
          ],
          title: 'I Still Believe',
          vote_average: 7.8,
          overview: 'The true-life story of Christian music star Jeremy Camp and his journey of love and loss that looks to prove there is always hope.',
          release_date: '2020-03-12'
        },
        {
          popularity: 33.513,
          vote_count: 49,
          video: false,
          poster_path: '/zaecdNcjcVDiOcDcgQCOgHELSo0.jpg',
          id: 605804,
          adult: false,
          backdrop_path: '/A7xO8NpdS7fbBKGmh84HbSD21OJ.jpg',
          original_language: 'en',
          original_title: 'The Wretched',
          genre_ids: [
            27
          ],
          title: 'The Wretched',
          vote_average: 6.9,
          overview: 'A rebellious teenage boy embarks on a gutsy crusade to stop the terrifying evil he suspects has possessed his neighbor in this bone-chilling occult thriller.',
          release_date: '2020-05-01'
        },
        {
          popularity: 28.101,
          vote_count: 54,
          video: false,
          poster_path: '/fKv4A3zlqmlVacu8dbKNk9Twz7h.jpg',
          id: 442065,
          adult: false,
          backdrop_path: '/eZwwJ5yRpMDhZzfMS7XeWwUzLSE.jpg',
          original_language: 'en',
          original_title: 'The Last Full Measure',
          genre_ids: [
            18,
            10752
          ],
          title: 'The Last Full Measure',
          vote_average: 7.8,
          overview: 'The incredible true story of Vietnam War hero William H. Pitsenbarger, a U.S. Air Force Pararescuemen medic who personally saved over sixty men. Thirty-two years later, Pentagon staffer Scott Huffman investigates a Congressional Medal of Honor request for Pitsenbarger and uncovers a high-level conspiracy behind the decades-long denial of the medal, prompting Huffman to put his own career on the line to seek justice for the fallen airman.',
          release_date: '2020-01-23'
        },
        {
          popularity: 25.705,
          vote_count: 154,
          video: false,
          poster_path: '/8GGS0jkFFCnmdStvZED6NL6V7gd.jpg',
          id: 502425,
          adult: false,
          backdrop_path: '/kolkVKNZSjhZGHwcrFU36Watpke.jpg',
          original_language: 'en',
          original_title: 'Escape From Pretoria',
          genre_ids: [
            18,
            36,
            53
          ],
          title: 'Escape From Pretoria',
          vote_average: 6.5,
          overview: 'South Africa, 1978. Tim Jenkin and Stephen Lee, two white political activists from the African National Congress imprisoned by the apartheid regime, put a plan in motion to escape from the infamous Pretoria Prison…',
          release_date: '2020-03-06'
        },
        {
          popularity: 25.478,
          vote_count: 0,
          video: false,
          poster_path: '/iNYLKhvrtHFAjq5U2qKe7vCdjRv.jpg',
          id: 691247,
          adult: false,
          backdrop_path: null,
          original_language: 'en',
          original_title: 'I Dream of Peace',
          genre_ids: [
            18,
            14
          ],
          title: 'I Dream of Peace',
          vote_average: 0,
          overview: 'A young man fearing death because of a pandemic gets a visit from a voice who tells and shows him the beauty of life.',
          release_date: '2020-05-10'
        },
        {
          popularity: 25.472,
          vote_count: 462,
          video: false,
          poster_path: '/p9vCAVhDK375XyobVcKqzqzsUHE.jpg',
          id: 501907,
          adult: false,
          backdrop_path: '/w0tJot6O0UtLVBRIPAdg3dQ2oNO.jpg',
          original_language: 'en',
          original_title: 'A Beautiful Day in the Neighborhood',
          genre_ids: [
            18
          ],
          title: 'A Beautiful Day in the Neighborhood',
          vote_average: 7.1,
          overview: "An award-winning cynical journalist, Lloyd Vogel, begrudgingly accepts an assignment to write an Esquire profile piece on the beloved television icon Fred Rogers. After his encounter with Rogers, Vogel's perspective on life is transformed.",
          release_date: '2019-09-07'
        },
        {
          popularity: 23.578,
          vote_count: 86,
          video: false,
          poster_path: '/8A6qALzfMxgj51ly8KyTCZfXutG.jpg',
          id: 477018,
          adult: false,
          backdrop_path: '/uaC1Swfs1fo7Y9fV1iRHzLdhFHo.jpg',
          original_language: 'fr',
          original_title: 'Les Traducteurs',
          genre_ids: [
            53
          ],
          title: 'The Translators',
          vote_average: 6.9,
          overview: 'Nine translators have been picked by a ruthless publisher and locked in a luxury bunker to translate the highly anticipated book of a famous author in record time. Although the translators are confined to prevent any kind of leak because of the high financial stakes, a crisis erupts when someone posts the first 10 pages of the novel online and blackmails the publisher to pay 5 million euros. A hunt for the culprit inside the bunker unfolds.',
          release_date: '2019-12-20'
        },
        {
          popularity: 22.078,
          vote_count: 0,
          video: false,
          poster_path: '/45Pg5ZzRa4fDwtPQmmE09dT018p.jpg',
          id: 698320,
          adult: false,
          backdrop_path: null,
          original_language: 'en',
          original_title: 'The Mad Hatter',
          genre_ids: [
            27,
            53
          ],
          title: 'The Mad Hatter',
          vote_average: 0,
          overview: 'No overview given yet.',
          release_date: '2020-05-15'
        },
        {
          popularity: 21.718,
          vote_count: 0,
          video: false,
          poster_path: '/ubxRgS5hYJyOXcxAJKgAkZV2LL0.jpg',
          id: 673760,
          adult: false,
          backdrop_path: null,
          original_language: 'it',
          original_title: 'Il caso Pantani',
          genre_ids: [],
          title: 'Il caso Pantani',
          vote_average: 0,
          overview: '',
          release_date: '2020-05-11'
        },
        {
          popularity: 19.564,
          vote_count: 20,
          video: false,
          poster_path: '/1UHrZxcewhGydsqrRF5Z6Qgqf6i.jpg',
          id: 617786,
          adult: false,
          backdrop_path: '/lxVf7wzanbz7m0mou7pUhokBYB.jpg',
          original_language: 'en',
          original_title: 'The Other Lamb',
          genre_ids: [
            18,
            27,
            53
          ],
          title: 'The Other Lamb',
          vote_average: 6.4,
          overview: 'A haunting and nightmarish tale that tells the story of Selah, a young girl born into a repressive cult known as the Flock. The members of the Flock – all women and female children– live in a rural compound, and are led by one man, known only as Shepherd. Selah, a daughter who is on the cusp of teenage-hood, is given the great honor of participating in the sacred ritual of the birthing of the lambs – upon which they depend for survival – where she has a shocking and otherworldly experience. She begins to have strange visions that make her question her own reality, and everything the Shepherd has taught her and her sisters.',
          release_date: '2020-04-03'
        },
        {
          popularity: 16.914,
          vote_count: 567,
          video: false,
          poster_path: '/7ht2IMGynDSVQGvAXhAb83DLET8.jpg',
          id: 565310,
          adult: false,
          backdrop_path: '/qfB3KR6AuRI3Sqz8jWAOpRaGC0H.jpg',
          original_language: 'en',
          original_title: 'The Farewell',
          genre_ids: [
            35,
            18
          ],
          title: 'The Farewell',
          vote_average: 7.6,
          overview: "A headstrong Chinese-American woman returns to China when her beloved grandmother is given a terminal diagnosis. Billi struggles with her family's decision to keep grandma in the dark about her own illness as they all stage an impromptu wedding to see grandma one last time.",
          release_date: '2019-07-12'
        },
        {
          popularity: 16.412,
          vote_count: 101,
          video: false,
          poster_path: '/mDna51F8QfrJFZOgPGQUz3VKqsB.jpg',
          id: 576017,
          adult: false,
          backdrop_path: '/srNZKMACevekfN9Ca0C92gMvI7A.jpg',
          original_language: 'en',
          original_title: 'For Sama',
          genre_ids: [
            99,
            10752
          ],
          title: 'For Sama',
          vote_average: 8.6,
          overview: 'A love letter from a young mother to her daughter, the film tells the story of Waad al-Kateab’s life through five years of the uprising in Aleppo, Syria as she falls in love, gets married and gives birth to Sama, all while cataclysmic conflict rises around her.  Her camera captures incredible stories of loss, laughter and survival as Waad wrestles with an impossible choice– whether or not to flee the city to protect her daughter’s life, when leaving means abandoning the struggle for freedom for which she has already sacrificed so much.',
          release_date: '2019-10-09'
        },
        {
          popularity: 16.351,
          vote_count: 12,
          video: false,
          poster_path: '/gKwXP1VvKNxrc1400yksKA4D9Qc.jpg',
          id: 617784,
          adult: false,
          backdrop_path: '/pPtBB9fD70Ta44pSQXGvZ6Kwc0p.jpg',
          original_language: 'en',
          original_title: 'Military Wives',
          genre_ids: [
            18
          ],
          title: 'Military Wives',
          vote_average: 8.1,
          overview: 'Inspired by global phenomenon of military wives choirs, the story celebrates a band of misfit women who form a choir on a military base. As unexpected bonds of friendship flourish, music and laughter transform their lives, helping each other to overcome their fears for loved ones in combat.',
          release_date: '2020-03-06'
        },
        {
          popularity: 15.679,
          vote_count: 1380,
          video: false,
          poster_path: '/2WDmjUlSAPlA27i2OwEC7sRTFw3.jpg',
          id: 228165,
          adult: false,
          backdrop_path: '/cSsjnBNNzXqsmW2FncpdwiNseSV.jpg',
          original_language: 'en',
          original_title: 'The SpongeBob Movie: Sponge Out of Water',
          genre_ids: [
            12,
            16,
            35,
            14,
            10751
          ],
          title: 'The SpongeBob Movie: Sponge Out of Water',
          vote_average: 5.8,
          overview: 'Burger Beard is a pirate who is in search of the final page of a magical book that makes any evil plan he writes in it come true, which happens to be the Krabby Patty secret formula. When the entire city of Bikini Bottom is put in danger, SpongeBob, Patrick, Mr. Krabs, Squidward, Sandy, and Plankton need to go on a quest that takes them to the surface. In order to get back the recipe and save their city, the gang must retrieve the book and transform themselves into superheroes.',
          release_date: '2015-01-28'
        },
        {
          popularity: 14.27,
          vote_count: 0,
          video: false,
          poster_path: '/biwNluv4pvGkU7qsXMM2sk6oKjy.jpg',
          id: 690545,
          adult: false,
          backdrop_path: null,
          original_language: 'en',
          original_title: 'STORIES',
          genre_ids: [
            99
          ],
          title: 'STORIES',
          vote_average: 0,
          overview: 'A documentary focused on the past, present, and future told through the stories of sixty high school students.',
          release_date: '2020-05-13'
        },
        {
          popularity: 14.061,
          vote_count: 13,
          video: false,
          poster_path: '/o1SoYYvxG4bWTXp4wNWt5sKQf1E.jpg',
          id: 567965,
          adult: false,
          backdrop_path: '/jmsCEbIfJJcH8A8diq45ck5bhx6.jpg',
          original_language: 'en',
          original_title: 'Misbehaviour',
          genre_ids: [
            18,
            36
          ],
          title: 'Misbehaviour',
          vote_average: 6.7,
          overview: 'A group of women hatch a plan to disrupt the 1970 Miss World beauty competition in London.',
          release_date: '2020-03-12'
        }
      ],
      page: 1,
      total_results: 165,
      dates: {
        maximum: '2020-06-06',
        minimum: '2020-05-10'
      },
      total_pages: 9
    }
  )
})

app.get('/genresListDummy', (req, res) => {
  res.status(200).json(
    {
      genres: [
        {
          id: 28,
          name: 'Action'
        },
        {
          id: 12,
          name: 'Adventure'
        },
        {
          id: 16,
          name: 'Animation'
        },
        {
          id: 35,
          name: 'Comedy'
        },
        {
          id: 80,
          name: 'Crime'
        },
        {
          id: 99,
          name: 'Documentary'
        },
        {
          id: 18,
          name: 'Drama'
        },
        {
          id: 10751,
          name: 'Family'
        },
        {
          id: 14,
          name: 'Fantasy'
        },
        {
          id: 36,
          name: 'History'
        },
        {
          id: 27,
          name: 'Horror'
        },
        {
          id: 10402,
          name: 'Music'
        },
        {
          id: 9648,
          name: 'Mystery'
        },
        {
          id: 10749,
          name: 'Romance'
        },
        {
          id: 878,
          name: 'Science Fiction'
        },
        {
          id: 10770,
          name: 'TV Movie'
        },
        {
          id: 53,
          name: 'Thriller'
        },
        {
          id: 10752,
          name: 'War'
        },
        {
          id: 37,
          name: 'Western'
        }
      ]
    }
  )
})

app.get('/personDummy/:query', (req, res) => {
  res.status(401).json(
    {
      page: 1,
      total_results: 257,
      total_pages: 13,
      results: [
        {
          popularity: 10.348,
          known_for_department: 'Directing',
          name: 'Quentin Tarantino',
          id: 138,
          profile_path: '/f00gwMDBfJh6D5c7KQan6eek9h6.jpg',
          adult: false,
          known_for: [
            {
              poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
              vote_count: 18562,
              video: false,
              media_type: 'movie',
              id: 680,
              adult: false,
              backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
              original_language: 'en',
              original_title: 'Pulp Fiction',
              genre_ids: [
                80,
                53
              ],
              title: 'Pulp Fiction',
              vote_average: 8.5,
              overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
              release_date: '1994-09-10'
            },
            {
              poster_path: '/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg',
              vote_count: 18247,
              video: false,
              media_type: 'movie',
              id: 68718,
              adult: false,
              backdrop_path: '/s4cJQaj40SwMifUrrdtdOJsjnRO.jpg',
              original_language: 'en',
              original_title: 'Django Unchained',
              genre_ids: [
                18,
                37
              ],
              title: 'Django Unchained',
              vote_average: 8.1,
              overview: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
              release_date: '2012-12-25'
            },
            {
              poster_path: '/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg',
              vote_count: 14567,
              video: false,
              media_type: 'movie',
              id: 16869,
              adult: false,
              backdrop_path: '/8pEnePgGyfUqj8Qa6d91OZQ6Aih.jpg',
              original_language: 'en',
              original_title: 'Inglourious Basterds',
              genre_ids: [
                28,
                18,
                53,
                10752
              ],
              title: 'Inglourious Basterds',
              vote_average: 8.2,
              overview: 'In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as "The Basterds" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.',
              release_date: '2009-08-18'
            }
          ],
          gender: 2
        },
        {
          popularity: 1.38,
          known_for_department: 'Art',
          name: 'Stefan Quentin',
          id: 1551958,
          profile_path: null,
          adult: false,
          known_for: [
            {
              poster_path: '/slVnvaH6fpF22154vnjQJdXCVZd.jpg',
              vote_count: 7423,
              video: false,
              media_type: 'movie',
              id: 194,
              adult: false,
              backdrop_path: '/pVhLAiCzbOFx686jw9RtIqxSOrZ.jpg',
              original_language: 'fr',
              original_title: "Le Fabuleux Destin d'Amélie Poulain",
              genre_ids: [
                35,
                10749
              ],
              title: 'Amélie',
              vote_average: 7.9,
              overview: 'At a tiny Parisian café, the adorable yet painfully shy Amélie (Audrey Tautou) accidentally discovers a gift for helping others. Soon Amelie is spending her days as a matchmaker, guardian angel, and all-around do-gooder. But when she bumps into a handsome stranger, will she find the courage to become the star of her very own love story?',
              release_date: '2001-04-25'
            }
          ],
          gender: 0
        },
        {
          popularity: 1.38,
          known_for_department: 'Acting',
          name: 'Quentin Merabet',
          id: 1560877,
          profile_path: '/jdW5DodJQh46OYg2Kufpvym7eXA.jpg',
          adult: false,
          known_for: [
            {
              original_name: 'Candice Renoir',
              genre_ids: [
                35,
                80,
                10751
              ],
              media_type: 'tv',
              name: 'Candice Renoir',
              origin_country: [
                'FR'
              ],
              vote_count: 20,
              first_air_date: '2013-04-19',
              backdrop_path: '/1XOpPKammDExxYfwx2o0Pin6AoB.jpg',
              original_language: 'fr',
              id: 55866,
              vote_average: 6.8,
              overview: 'Candice Renoir had put her career on standby for 10 years. When she  returns from Singapore to resume service in a port town in the south of  France, she feels a bit “rusty”. Despite the obvious defiance of her  unit and a cynical superior who doesn’t make her job any easier, she is  determined to turn her so-called weaknesses into strengths, solving the  most complex cases with her common sense, her acute observation and her  practical nature seasoned by a busy daily routine.\n\nOnly Candice can  catch a killer because she knows the chemical composition of a  window-cleaning product or determine the hour of a murder from the  cooking-time of kebabs… Candice is only naive on the outside, and nobody  can resist her!',
              poster_path: '/yinQce5khtVovY2oDcZsP6slAf1.jpg'
            },
            {
              original_name: 'Code Lyoko',
              genre_ids: [
                16,
                35,
                10759
              ],
              media_type: 'tv',
              name: 'Code Lyoko',
              origin_country: [
                'FR'
              ],
              vote_count: 17,
              first_air_date: '2003-09-03',
              backdrop_path: '/8Jkjqr2YgVuIwKbjcwm5bEPc3d5.jpg',
              original_language: 'fr',
              id: 4622,
              vote_average: 7.5,
              overview: 'Code Lyoko centers on four children who travel to the virtual world of Lyoko to battle against a sentient artificial intelligence named XANA, with a virtual human called Aelita.',
              poster_path: '/86LdmxBCP9ghdtATP4WjN29vSqP.jpg'
            },
            {
              original_name: 'Code Lyoko Évolution',
              genre_ids: [
                16,
                10751,
                10762,
                10765
              ],
              media_type: 'tv',
              name: 'Code Lyoko Évolution',
              origin_country: [
                'FR'
              ],
              vote_count: 3,
              first_air_date: '2012-12-05',
              backdrop_path: null,
              original_language: 'fr',
              id: 68794,
              vote_average: 8.3,
              overview: '',
              poster_path: '/pBCsVWUrwmgevtcpLdDNIM7wHrJ.jpg'
            }
          ],
          gender: 0
        },
        {
          popularity: 0.98,
          known_for_department: 'Writing',
          name: 'Quentin Crisp',
          id: 57459,
          profile_path: '/9kp2xAPdUtZnmSTmpiNxoBQz5Tj.jpg',
          adult: false,
          known_for: [
            {
              poster_path: '/bdKnysyR5WLkbr335Uti8FF9OJQ.jpg',
              vote_count: 19,
              video: false,
              media_type: 'movie',
              id: 40950,
              adult: false,
              backdrop_path: '/jOVVbdE2aE5dxH05ifKrteKI8Tp.jpg',
              original_language: 'en',
              original_title: 'The Naked Civil Servant',
              genre_ids: [
                35,
                18,
                10770
              ],
              title: 'The Naked Civil Servant',
              vote_average: 7.4,
              overview: 'Story of the life of Quentin Crisp, an Englishman who was brave enough to live his life according to his own style even in the hostile days of WW2.',
              release_date: '1975-12-17'
            }
          ],
          gender: 2
        },
        {
          popularity: 0.98,
          known_for_department: 'Acting',
          name: 'Quentin Rollet',
          id: 1738071,
          profile_path: null,
          adult: false,
          known_for: [
            {
              poster_path: '/isZq3DUBspCbDrKZ3g1RMbWcoCT.jpg',
              vote_count: 3,
              video: true,
              media_type: 'movie',
              id: 258199,
              adult: true,
              backdrop_path: null,
              original_language: 'fr',
              original_title: 'XYZ',
              genre_ids: [],
              title: 'XYZ',
              vote_average: 8.3,
              overview: '',
              release_date: '2000-01-01'
            },
            {
              poster_path: null,
              vote_count: 4,
              video: false,
              media_type: 'movie',
              id: 316878,
              adult: false,
              backdrop_path: null,
              original_language: 'fr',
              original_title: 'I Love Snuff',
              genre_ids: [
                80,
                27,
                10749
              ],
              title: 'I Love Snuff',
              vote_average: 6.5,
              overview: "An S/M couple kidnaps a young victim and tortures her. They film the tortures and send the videos to the girl's husband, hoping to horrify him and get a reaction. But the husband is excited and asks for more...",
              release_date: '1995-01-01'
            }
          ],
          gender: 0
        },
        {
          popularity: 0.98,
          known_for_department: 'Acting',
          name: 'Thérèse Quentin',
          id: 40587,
          profile_path: '/g7e3qftI6XPwXuKsX3mVrNgkPFA.jpg',
          adult: false,
          known_for: [
            {
              vote_count: 54,
              id: 11396,
              video: false,
              media_type: 'movie',
              vote_average: 6.9,
              title: 'The Last Adventure',
              release_date: '1967-04-12',
              original_language: 'fr',
              original_title: 'Les Aventuriers',
              genre_ids: [
                10749,
                12,
                18
              ],
              backdrop_path: '/efJb6KshAYsGhPKAtCGQVeEmRh8.jpg',
              adult: false,
              overview: "Two adventurers and best friends, Roland and Manu, are the victims of a practical joke that costs Manu his pilot's license. With seeming contrition, the jokesters tell Roland and Manu about a crashed plane lying on the ocean floor off the coast of Congo stuffed with riches. The adventurers set off to find the loot.",
              poster_path: '/2AFNpxqQSQ13QHywijPrCtZn64M.jpg'
            },
            {
              vote_count: 25,
              id: 315865,
              video: false,
              media_type: 'movie',
              vote_average: 5.9,
              title: 'In the Shadow of Women',
              release_date: '2015-05-14',
              original_language: 'fr',
              original_title: "L'Ombre des femmes",
              genre_ids: [
                18
              ],
              backdrop_path: '/wgxy48L6vnk85R7Z2xNftO3lr86.jpg',
              adult: false,
              overview: 'Pierre and Manon are poor. They make documentaries with nothing and they live by doing odd jobs.  Pierre meets a young intern, Elisabeth, and she becomes his mistress. But Pierre will not leave Manon for Elisabeth; he wants to keep both.',
              poster_path: '/v6rwTr6OyjNR3Ny3pseM5ecGEIv.jpg'
            },
            {
              poster_path: null,
              vote_count: 7,
              video: false,
              media_type: 'movie',
              id: 5035,
              adult: false,
              backdrop_path: '/lBTvypThFLV5NzrfOJ4dxL3qSFI.jpg',
              original_language: 'fr',
              original_title: 'Le grand Meaulnes',
              genre_ids: [
                18
              ],
              title: 'The Wanderer',
              vote_average: 5.4,
              overview: "Rural France, the 1890s. Always in motion, Augustin wanders three times. First, as a youth, while a boarder near Bourges, he's lost in the woods and finds a chateau where an engagement party's in progress: there he falls eternally in love with Yvonne and she with him. Back at school, he hears she is in Paris, so he follows in a vain search and meets a woman, jilted by her lover. In the countryside a few year's later, Augustin's friend François finds Yvonne and brings Augustin to her. They marry, but the next day, Augustin leaves to fulfill a youthful promise he made to Yvonne's brother. François comforts the pregnant Yvonne as they await Augustin's return.",
              release_date: '1967-11-01'
            }
          ],
          gender: 1
        },
        {
          popularity: 0.98,
          known_for_department: 'Acting',
          gender: 0,
          id: 1734174,
          profile_path: '/eJniyl3ekN3WXz1S2b44CxiwCbs.jpg',
          adult: false,
          known_for: [
            {
              release_date: '2015-05-13',
              id: 76341,
              vote_count: 16271,
              video: false,
              media_type: 'movie',
              vote_average: 7.5,
              title: 'Mad Max: Fury Road',
              genre_ids: [
                28,
                12,
                878
              ],
              original_title: 'Mad Max: Fury Road',
              original_language: 'en',
              adult: false,
              backdrop_path: '/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg',
              overview: 'An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.',
              poster_path: '/sQuxceRcV3cxKH5CAnAUZe0qFKS.jpg'
            },
            {
              poster_path: '/38iUtsEmLgJZEQuLwacjaDsTZII.jpg',
              vote_count: 8,
              video: false,
              media_type: 'movie',
              id: 24172,
              adult: false,
              genre_ids: [],
              original_title: 'Dr. Plonk',
              original_language: 'en',
              title: 'Dr. Plonk',
              vote_average: 5.8,
              overview: 'A scientist &amp; inventor in 1907, Dr Plonk, predicts that the world will end in 101 years, unless something is done about it.',
              release_date: '2007-08-30'
            },
            {
              release_date: '2005-05-24',
              vote_count: 4,
              video: false,
              media_type: 'movie',
              id: 61008,
              vote_average: 4.1,
              title: 'You and Your Stupid Mate',
              original_language: 'en',
              original_title: 'You and Your Stupid Mate',
              genre_ids: [
                35
              ],
              adult: false,
              overview: 'Phillip (Phillips) and Geoffrey (Sampson) are two Aussie larrikins, whose lives centre around running the un-official "Sons and Surf" website...',
              poster_path: '/6Gbq8JJYkKefFsDSKJsZWatwOVV.jpg'
            }
          ],
          name: 'Quentin Kenihan'
        },
        {
          popularity: 0.98,
          known_for_department: 'Production',
          gender: 0,
          id: 1835124,
          profile_path: null,
          adult: false,
          known_for: [
            {
              poster_path: '/l5ulq5gIbF0x4LFms51eokAQkwS.jpg',
              vote_count: 0,
              video: false,
              media_type: 'movie',
              id: 462378,
              adult: false,
              genre_ids: [
                35
              ],
              original_title: 'Mi-temps',
              original_language: 'fr',
              title: 'Mi-temps',
              vote_average: 0,
              overview: 'Karim, thirty-seven years, seven months, five days, seven hours, and twelve seconds old, has reached the exact midpoint of his life. Like every human who arrives at half time, he receives a visit from a surprising messenger who gives him the choice between continuing to live his life as it is now, or starting it all over again. He has fifteen minutes to decide.',
              release_date: '2017-01-19'
            }
          ],
          name: 'Quentin Montant'
        },
        {
          popularity: 0.98,
          known_for_department: 'Sound',
          gender: 0,
          id: 1608987,
          profile_path: null,
          adult: false,
          known_for: [
            {
              vote_count: 1,
              video: false,
              media_type: 'movie',
              id: 393966,
              vote_average: 6,
              original_language: 'en',
              original_title: 'Compostelle, le chemin de la vie',
              title: 'Compostelle, le chemin de la vie',
              genre_ids: [
                12,
                99,
                36
              ],
              adult: false,
              overview: "For three years, the director followed a few pilgrim's journey on Saint Jame's way, the most famous European pilgrimage. There are no paths to Compostela alike. No matter their age, their social background, their religious beliefs, each and everyone of them must overstep their limits and face their true self. These ordeals affect their inner-self as well as their body. Step after step, a new pace of life takes over, the path leads to new perceptions. Through repeated contact with wildlife, elements and other pilgrims, individuals reconnect with their true place. The way's alchemy spreads over. The pilgrim's journey finally comes to an end at Cape Finisterre by burning his old clothes. The old man vanishes, giving birth to the new man.",
              release_date: '2015-04-01'
            }
          ],
          name: 'Quentin Dujardin'
        },
        {
          popularity: 0.98,
          known_for_department: 'Acting',
          gender: 0,
          id: 1964596,
          profile_path: null,
          adult: false,
          known_for: [
            {
              release_date: '2011-09-20',
              id: 74945,
              vote_count: 319,
              video: false,
              media_type: 'movie',
              vote_average: 6,
              title: 'War of the Buttons',
              genre_ids: [
                12,
                10751
              ],
              original_title: 'La Nouvelle Guerre des boutons',
              original_language: 'fr',
              adult: false,
              backdrop_path: '/1V8geQ8N3KeEG9ZLpZJ9ASj4HOy.jpg',
              overview: "Occupied France; Lebrac leads a play war between two rival kid gangs, but a girl he likes, who's Jewish, is in danger of being discovered by local Nazi sympathisers. Lebrac and the village must now respond to the reality of what's happening.",
              poster_path: '/ibINMdUCDTcxxQujp9MKEEDdbB.jpg'
            }
          ],
          name: 'Quentin Charisoli'
        },
        {
          popularity: 0.6,
          known_for_department: 'Acting',
          gender: 2,
          id: 134440,
          profile_path: '/a0wjACYiwDtzqzPQ5x9m7F5Xaa4.jpg',
          adult: false,
          known_for: [
            {
              release_date: '1982-11-30',
              id: 783,
              vote_count: 1380,
              video: false,
              media_type: 'movie',
              vote_average: 7.5,
              title: 'Gandhi',
              genre_ids: [
                18,
                36
              ],
              original_title: 'Gandhi',
              original_language: 'en',
              adult: false,
              backdrop_path: '/gum3tuO1zKHBdElSQPS08PJ1w67.jpg',
              overview: "In the early years of the 20th century, Mohandas K. Gandhi, a British-trained lawyer, forsakes all worldly possessions to take up the cause of Indian independence. Faced with armed resistance from the British government, Gandhi adopts a policy of 'passive resistance', endeavouring to win freedom for his people without resorting to bloodshed.",
              poster_path: '/mGIDXmuCeLu1nzOxLbN8fWwn1fN.jpg'
            },
            {
              poster_path: '/mdUtfHPGTRjPiKMw39NUZ6z5Mn2.jpg',
              id: 58937,
              vote_count: 39,
              video: false,
              media_type: 'movie',
              adult: false,
              backdrop_path: '/eNNJLx8cric9gLJhyufzS0N0kXE.jpg',
              genre_ids: [
                18,
                36
              ],
              original_title: 'Wittgenstein',
              original_language: 'en',
              title: 'Wittgenstein',
              vote_average: 6.7,
              overview: 'A dramatization, in modern theatrical style, of the life and thought of the Viennese-born, Cambridge-educated philosopher Ludwig Wittgenstein, whose principal interest was the nature and limits of language. A series of sketches depict the unfolding of his life from boyhood, through the era of the first World War, to his eventual Cambridge professorship and association with Bertrand Russell and John Maynard Keynes. The emphasis in these sketches is on the exposition of the ideas of Wittgenstein, a homosexual, and an intuitive, moody, proud, and perfectionistic thinker generally regarded as a genius.',
              release_date: '1993-03-26'
            },
            {
              poster_path: '/wQffxzw30Ng8kZ0wJVTPUYRHqrm.jpg',
              vote_count: 32,
              video: false,
              media_type: 'movie',
              id: 94794,
              adult: false,
              genre_ids: [
                18
              ],
              original_title: 'Blue',
              original_language: 'en',
              title: 'Blue',
              vote_average: 7.1,
              overview: "Against a plain, unchanging blue screen, a densely interwoven soundtrack of voices, sound effects and music attempt to convey a portrait of Derek Jarman's experiences with AIDS, both literally and allegorically, together with an exploration of the meanings associated with the colour blue.",
              release_date: '1993-08-19'
            }
          ],
          name: 'John Quentin'
        },
        {
          popularity: 0.884,
          known_for_department: 'Acting',
          name: 'Quentin Dean',
          id: 196406,
          profile_path: '/mhSEPBjpYTSOwAczs4XKIQBdgzI.jpg',
          adult: false,
          known_for: [
            {
              poster_path: '/fvqHTabYej3LwzKRRZCm6jV3g0O.jpg',
              vote_count: 493,
              video: false,
              media_type: 'movie',
              id: 10633,
              adult: false,
              backdrop_path: '/xY5sgU09cOsvEAgJZaYo2aOZEFi.jpg',
              original_language: 'en',
              original_title: 'In the Heat of the Night',
              genre_ids: [
                80,
                18,
                9648,
                53
              ],
              title: 'In the Heat of the Night',
              vote_average: 7.8,
              overview: 'An African American detective is asked to investigate a murder in a racist southern town.',
              release_date: '1967-08-02'
            },
            {
              poster_path: '/v3RcNrqutEPGsiTLd31J3U735kB.jpg',
              vote_count: 40,
              video: false,
              media_type: 'movie',
              id: 1676,
              adult: false,
              backdrop_path: '/u6QeHLm3NNAYwVzFnIiHtjqXowQ.jpg',
              original_language: 'en',
              original_title: 'Will Penny',
              genre_ids: [
                37,
                10749
              ],
              title: 'Will Penny',
              vote_average: 6.7,
              overview: "Will Penny, an aging cowpoke, takes a job on a ranch which requires him to ride the line of the property looking for trespassers or, worse, squatters. He finds that his cabin in the high mountains has been appropriated by a woman whose guide to Oregon has deserted her and her son. Too ashamed to kick mother and child out just as the bitter winter of the mountains sets in, he agrees to share the cabin until the spring thaw. But it isn't just the snow that slowly thaws; the lonely man and woman soon forget their mutual hostility and start developing a deep love for one another.",
              release_date: '1967-12-19'
            },
            {
              vote_count: 8,
              id: 49776,
              video: false,
              media_type: 'movie',
              vote_average: 6,
              title: 'Stay Away, Joe',
              release_date: '1968-03-08',
              original_language: 'en',
              original_title: 'Stay Away, Joe',
              genre_ids: [
                28,
                35,
                18,
                10402,
                10749,
                37
              ],
              backdrop_path: '/dPVV1GxajoCrvaU941O0qSvwEZD.jpg',
              adult: false,
              overview: "Joe Lightcloud persuades his Congressman to give him 20 heifers and a prize bull so he and his father, Charlie, can prove that the Navajos can successfully raise cattle on the reservation. If their experiment is successful, then the government will help all the Navajo people. But Joe's friend, Bronc Hoverty, accidentally barbecues the prize bull, while Joe sells the heifers to buy plumbing and other home improvements for his stepmother.",
              poster_path: '/iIPnPGL3gMrvuzAIB9BWy9vUuQf.jpg'
            }
          ],
          gender: 1
        },
        {
          popularity: 0.6,
          known_for_department: 'Acting',
          gender: 2,
          id: 1798984,
          profile_path: '/oLyP7N8tZgjQk9adqRaHOUeC0YE.jpg',
          adult: false,
          known_for: [
            {
              release_date: '2017-07-13',
              id: 452910,
              vote_count: 29,
              video: false,
              media_type: 'movie',
              vote_average: 7.4,
              title: 'Immortal Demon Slayer',
              genre_ids: [
                28,
                12,
                14
              ],
              original_title: '悟空传',
              original_language: 'zh',
              adult: false,
              backdrop_path: '/tTqFu88ef79Y9WcdoBGF9xKmNao.jpg',
              overview: 'Sun Wukong (Eddie Peng) and Erlang Shen (Shawn Yue) come to the Immortal Mountain to cultivate their skills. They gain friendship, experience love and ultimately betrayal, growing throughout their life journey.',
              poster_path: '/eRaQrRxkFrlhqMnBmfcscLoujWM.jpg'
            },
            {
              vote_count: 0,
              video: false,
              media_type: 'movie',
              id: 602854,
              adult: false,
              genre_ids: [
                10749,
                35
              ],
              original_title: '欧巴，你好帅',
              original_language: 'zh',
              title: '欧巴，你好帅',
              vote_average: 0,
              overview: '',
              release_date: ''
            }
          ],
          name: 'Quentin Zhang'
        },
        {
          popularity: 0.6,
          known_for_department: 'Acting',
          name: 'Quentin Armand',
          id: 2580655,
          profile_path: null,
          adult: false,
          known_for: [
            {
              original_name: 'Garde à vous',
              id: 68700,
              media_type: 'tv',
              name: 'Garde à vous',
              vote_count: 0,
              vote_average: 0,
              first_air_date: '2016-02-16',
              poster_path: '/ykUHG6wkTP9AWYOcLFRFrIbqWKt.jpg',
              genre_ids: [],
              original_language: 'fr',
              backdrop_path: '/bT6EFJVsIz8GUbOBwROhHpT1OjD.jpg',
              overview: '',
              origin_country: []
            }
          ],
          gender: 0
        },
        {
          popularity: 0.6,
          known_for_department: 'Directing',
          gender: 2,
          id: 2478112,
          profile_path: null,
          adult: false,
          known_for: [
            {
              release_date: '2015-08-19',
              vote_count: 43,
              video: false,
              media_type: 'movie',
              id: 254800,
              vote_average: 5.7,
              title: 'Breaking Through',
              original_language: 'en',
              original_title: 'Breaking Through',
              genre_ids: [
                18,
                10402
              ],
              adult: false,
              overview: 'When Casey, a dancer who is discovered on YouTube, gets thrust into the modern world of internet celebrity and culture, she must find a way to balance her true identity with her online persona, or risk losing everything she cares about.',
              poster_path: '/1DjDNtuMX0Jc6kofURN0ENAtUG5.jpg'
            }
          ],
          name: 'Quentin Frismand'
        },
        {
          popularity: 0.6,
          known_for_department: 'Camera',
          gender: 0,
          id: 2091396,
          profile_path: null,
          adult: false,
          known_for: [
            {
              poster_path: '/WQvj3Oqw8sP4SFiv4zs3Zg6cRq.jpg',
              vote_count: 1,
              video: false,
              media_type: 'movie',
              id: 537670,
              adult: false,
              genre_ids: [
                16,
                35
              ],
              original_title: "Raymonde ou L'Évasion Verticale",
              original_language: 'en',
              title: 'Raymonde or the Vertical Escape',
              vote_average: 8,
              overview: 'Raymonde is really fed up with peas, aphids, dirty panties and her kitchen garden to dig. After all, she would prefer sex, and love, and the immensity of the sky...',
              release_date: '2018-06-12'
            }
          ],
          name: 'Quentin Lemouland'
        },
        {
          popularity: 0.6,
          known_for_department: 'Acting',
          gender: 0,
          id: 1287207,
          profile_path: null,
          adult: false,
          known_for: [
            {
              release_date: '1992-07-24',
              id: 13153,
              vote_count: 96,
              video: false,
              media_type: 'movie',
              vote_average: 6.1,
              title: 'Rapid Fire',
              genre_ids: [
                28,
                53
              ],
              original_title: 'Rapid Fire',
              original_language: 'en',
              adult: false,
              backdrop_path: '/hGhtobTxIJJ7atGp1nfanfPT4Nf.jpg',
              overview: 'College student Jake Lo is pursued by smugglers, mobsters and crooked federal agents after he witnesses a murder by a Mafia kingpin.',
              poster_path: '/qpm03Dh3qpfbX7BqiMGw9boVZvC.jpg'
            },
            {
              release_date: '1994-03-22',
              id: 251881,
              vote_count: 4,
              video: false,
              media_type: 'movie',
              vote_average: 7,
              title: 'Running Delilah',
              genre_ids: [
                28,
                878,
                10749
              ],
              original_title: 'Running Delilah',
              original_language: 'en',
              adult: false,
              backdrop_path: '/mUA2bEre4WQoVKhcSW4h1C6FGyV.jpg',
              overview: "Top agent Delilah dies in a risky mission against weapon dealer Kercharian. But she's revived with high-tech medicine and artificial body parts. As invincible superwoman she returns and continues her fight against Kercherian, who's newest deal includes Plutonium from Russia.",
              poster_path: '/kc8Gk1n64e8TmTZb1TxPEApwjqH.jpg'
            }
          ],
          name: "Quentin O'Brien"
        },
        {
          popularity: 0.658,
          known_for_department: 'Acting',
          name: 'Quentin Dolmaire',
          id: 1451520,
          profile_path: null,
          adult: false,
          known_for: [
            {
              poster_path: '/JfAE5Pj1Qqv7Ij5DaUG0QoZC97.jpg',
              vote_count: 199,
              video: false,
              media_type: 'movie',
              id: 416186,
              adult: false,
              backdrop_path: '/htaHZJan7m326nzBoGOgQyWeug8.jpg',
              original_language: 'fr',
              original_title: 'Le Redoutable',
              genre_ids: [
                35,
                18,
                10749
              ],
              title: 'Godard Mon Amour',
              vote_average: 6.8,
              overview: 'In 1967, during the making of “La Chinoise,” film director Jean-Luc Godard falls in love with 19-year-old actress Anne Wiazemsky and marries her.',
              release_date: '2017-06-24'
            },
            {
              poster_path: '/winpywe0HSFki1sdNVlQZQaBABT.jpg',
              vote_count: 102,
              video: false,
              media_type: 'movie',
              id: 315575,
              adult: false,
              backdrop_path: '/hJcWvo06Pze18parZGOjbfh7m9N.jpg',
              original_language: 'fr',
              original_title: 'Trois souvenirs de ma jeunesse',
              genre_ids: [
                18
              ],
              title: 'My Golden Days',
              vote_average: 6.8,
              overview: "Paul is preparing to leave Tajikistan, while thinking back on his adolescent years. His childhood, his mother's madness, the parties, the trip to the USSR where he lost his virginity, the friend who betrayed him and the love of his life.",
              release_date: '2015-05-20'
            },
            {
              vote_count: 83,
              id: 439154,
              video: false,
              media_type: 'movie',
              vote_average: 6,
              title: 'The Midwife',
              release_date: '2017-03-22',
              original_language: 'fr',
              original_title: 'Sage femme',
              genre_ids: [
                18
              ],
              backdrop_path: '/9NNY9oXn5rqk3VZDLQgTdBvwoHq.jpg',
              adult: false,
              overview: "Claire is a midwife and has devoted her life to others. At a moment when she is preoccupied by the imminent closure of the maternity clinic where she works, her life is further turned upside down when Béatrice, her father's former mistress, turns up on the scene. Béatrice is a capricious and selfish woman, Claire's exact opposite.",
              poster_path: '/wBrJGrTmUaGeJVPxAqJT2iZHQCA.jpg'
            }
          ],
          gender: 2
        },
        {
          popularity: 0.6,
          known_for_department: 'Acting',
          gender: 0,
          id: 1860014,
          profile_path: null,
          adult: false,
          known_for: [
            {
              vote_count: 0,
              video: false,
              media_type: 'movie',
              id: 468516,
              adult: false,
              genre_ids: [
                10402,
                35
              ],
              original_title: 'The New Waiter',
              original_language: 'en',
              title: 'The New Waiter',
              vote_average: 0,
              overview: 'A drunken waiter unmasks a nightclub conjurer as a thief.',
              release_date: '1930-03-01'
            }
          ],
          name: 'Quentin Tod'
        },
        {
          popularity: 0.6,
          known_for_department: 'Acting',
          gender: 0,
          id: 1362884,
          profile_path: null,
          adult: false,
          known_for: [
            {
              vote_count: 0,
              video: false,
              media_type: 'movie',
              id: 291901,
              vote_average: 0,
              original_language: 'en',
              original_title: 'Grossesse nerveuse',
              title: 'False Pregnancy',
              genre_ids: [
                35
              ],
              adult: false,
              overview: "Perhaps you have to love dogs in order to sell tins of slimy mystery meat to their owners. At any rate Martin, who is indifferent to pets in general, isn't doing all too well in his marketing job at Floppy Dog Foods. But right now this is the least of his problems: he has made a British au-pair pregnant in a one night stand; and while he is trying to figure out how to deal with this, his ex-wife (who divorced him over his not wanting children) and his mother (a militant anti-overpopulation, pro-birth control, pro-abortion activist) have a few comments to offer on the situation. Before his own child is born, Martin clearly has some growing up of his own to do.",
              release_date: '1993-09-11'
            },
            {
              poster_path: '/jC1q2GwuqG4nyFiWG1jOemZxLfb.jpg',
              vote_count: 0,
              video: false,
              media_type: 'movie',
              id: 570764,
              adult: false,
              genre_ids: [],
              original_title: "Pas d'amour sans amour!",
              original_language: 'fr',
              title: "Pas d'amour sans amour!",
              vote_average: 0,
              overview: "After her gynecologist tells her that her current involuntary celibacy could result in her being unable to enjoy sex in the future, Eva begins to consider ways that she could take active steps to get some action going in that area. Unfortunately, none of the men she currently knows are interested in going to bed with her, including her business partner, who just might be sexually attracted to trees but certainly isn't to her. That being the case, it is particularly galling that he gets jealous at the very notion of her having sex with business clients. Eva discusses these issues (and a great deal more) with her similarly forty-ish gal-pals.",
              release_date: '1993-11-10'
            }
          ],
          name: 'Quentin Hue'
        }
      ]
    }
  )
})

module.exports = {
  path: '/tmdb/',
  handler: app
}
