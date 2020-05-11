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

module.exports = {
  path: '/tmdb/',
  handler: app
}
