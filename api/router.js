const express = require('express');
const valid = require('./validate');
const axios = require('axios');

const champions = require('./champions');

const router = express.Router();

router.post('/mastery', (req, res, next) => {
  let summonerName = req.body.name;
  if (valid.user(summonerName)) {
    axios
      .get(
        `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summonerName}?api_key=${
          process.env.API_KEY
        }`
      )
      .then(function(response) {
        let user = {
          name: response.data.name,
          icon: response.data.profileIconId,
          id: response.data.id
        };
        axios
          .get(
            `https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/${
              user.id
            }?api_key=${process.env.API_KEY}`
          )
          .then(function(response) {
            let masteries = response.data;
            let points = 0;
            let masteryLevel = 0;
            for (let object of masteries) {
              let champion = champions[object.championId];
              object.key = champion.key;
              object.name = champion.name;
              object.title = champion.title;
              points += object.championPoints;
              masteryLevel += object.championLevel;
            }

            user.points = points;
            user.masteryLevel = masteryLevel;

            let data = {
              user,
              masteries
            };
            res.json(data);
          })
          .catch(function(error) {
            //console.log(error);
            next(new Error(error));
          });
      })
      .catch(function(error) {
        //console.log(error);
        next(new Error(error));
      });
  } else {
    //console.log(error);
    next(new Error('Invalid Summoner Name'));
  }
});

module.exports = router;
