import { Club, Clubs, Match, Matches } from "./types";

const clubs: Clubs = require("../data/clubs.json");
const results: Matches = require("../data/results.json");

function getClub(code: string): string {
  // return the value of the first element in the array where predicate is true, and undefined otherwise
  const club = clubs.clubs.find(club => club.code === code)
  if (!club) {
    throw new Error("Team does't exist");
  }
  return club.name;
};

function getResult(team1: string, team2: string): Match {
  // return the value of the first element in the array where predicate is true, and undefined otherwise
  const match = results.matches.find(match => {
    return team1 === match.team1 && team2 === match.team2
  })
  if (!match) {
    throw new Error("This match hasn't been played");
  }
  return match;
}

export {
  getClub,
  getResult,
}
