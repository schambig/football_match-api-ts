interface Club {
  name: string,
  code: string | null,
  country: string,
}

interface Clubs {
  name: string,
  clubs: Club[],
}

interface Match {
  round: string,
  date: string,
  team1: string,
  team2: string,
  score?: {
    ft: [number, number],
  }
}

interface Matches {
  name: string,
  matches: Match[];
}

export {
  Club,
  Clubs,
  Match,
  Matches,
}
