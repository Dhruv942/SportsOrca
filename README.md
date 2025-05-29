# SportsOrca Full Stack Internship - Upcoming Matches List

This project displays upcoming Soccer matches. The backend (Node.js/Express) fetches data from TheSportsDB API and serves it to the React frontend, which displays the match list with team names and scheduled date/time.

---

## API Details

- API URL format:  
  `https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventsnextleague.php?id=${leagueId}`
- League ID used: `4328` (English Premier League)
- API Key: Obtain your own API key from [TheSportsDB](https://www.thesportsdb.com/api.php) and set it in the backend configuration before running.

---

## Project Structure

/backend # Node.js backend server
/frontend # React frontend application


---

## Setup & Run Instructions

```bash
# 1. Backend setup and run
cd backend
npm install
# Set your API_KEY and leagueId in backend config or .env file
node server.js

# 2. Frontend setup and run
cd ../frontend
npm install
npm run dev
Backend runs on: http://localhost:5000

Frontend runs on: http://localhost:5173

```

## Frontend Host Link

[HostLink](https://sports-orca-b8tx-git-main-dhruv942s-projects.vercel.app/)

---
