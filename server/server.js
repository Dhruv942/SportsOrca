const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
const API_KEY = '123'; 
const leagueId = 4387; // NBA league id

// Route to fetch upcoming matches
app.get('/api/matches/upcoming', async (req, res) => {
  try {
    const basketballNextUrl = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventsnextleague.php?id=${leagueId}`;
    const response = await axios.get(basketballNextUrl);

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

    res.json({ upcomingMatches });
  } catch (error) {
    console.error("Error fetching upcoming matches:", error.message);
    res.status(500).json({ message: 'Error fetching upcoming matches', error: error.message });
  }
});

// Route to fetch past matches
app.get('/api/matches/past', async (req, res) => {
  try {
    const basketballPastUrl = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventspastleague.php?id=${leagueId}`;
    const response = await axios.get(basketballPastUrl);

    const pastMatches = response.data.events
      ? response.data.events.map(event => ({
          team1: event.strHomeTeam,
          team2: event.strAwayTeam,
          date: event.dateEvent,
          time: event.strTime,
          score: event.intHomeScore !== null && event.intAwayScore !== null
            ? `${event.intHomeScore}-${event.intAwayScore}`
            : null,
          status: 'finished',
        }))
      : [];

    res.json({ pastMatches });
  } catch (error) {
    console.error("Error fetching past matches:", error.message);
    res.status(500).json({ message: 'Error fetching past matches', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
