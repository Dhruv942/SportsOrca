const axios = require('axios');

module.exports = async (req, res) => {
  const API_KEY = '123';
  const leagueId = 4387;

  try {
    const url = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventspastleague.php?id=${leagueId}`;
    const response = await axios.get(url);

    const pastMatches = response.data.events
      ? response.data.events.map(event => ({
          team1: event.strHomeTeam,
          team2: event.strAwayTeam,
          date: event.dateEvent,
          time: event.strTime,
          score: event.intHomeScore && event.intAwayScore
            ? `${event.intHomeScore}-${event.intAwayScore}`
            : null,
          status: 'finished',
        }))
      : [];

    res.status(200).json({ pastMatches });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching matches', error: err.message });
  }
};
