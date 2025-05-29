const axios = require('axios');

module.exports = async (req, res) => {
  const API_KEY = '123';
  const leagueId = 4387;

  try {
    const url = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventsnextleague.php?id=${leagueId}`;
    const response = await axios.get(url);

    const upcomingMatches = response.data.events
      ? response.data.events.map(event => ({
          team1: event.strHomeTeam,
          team2: event.strAwayTeam,
          date: event.dateEvent,
          time: event.strTime,
          score: null,
          status: 'upcoming',
        }))
      : [];

    res.status(200).json({ upcomingMatches });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching matches', error: err.message });
  }
};
