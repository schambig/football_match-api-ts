import express from 'express';
import { getClub, getResult } from './database';

export default function createServer() {
  const app = express();

  app.get('/results/:team1/:team2', (req, res) => {
    try {
      let team1 = getClub(req.params.team1);
      let team2 = getClub(req.params.team2);
      let match = getResult(team1, team2);
      if (match.score) {
        res.json({
          date: match.date,
          result: `${team1} ${match.score.ft[0]} - ${match.score.ft[1]} ${team2}`
        })
      } else {
          res.json({
            date: match.date
        });
      }
    } catch (e: any) {
      res.status(400).json({
        error: e.message
      });
    }
  });

  return app;
}
