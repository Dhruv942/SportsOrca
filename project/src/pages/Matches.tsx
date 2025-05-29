/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { Calendar, AlertCircle, RefreshCcw } from 'lucide-react';
import type { Match } from '../types';
import MatchCard from '../components/MatchCard';
import LoadingSkeleton from '../components/LoadingSkeleton';

const TEAM_DETAILS = {
  Lakers: {
    name: 'Los Angeles Lakers',
    abbreviation: 'LAL',
    primaryColor: '#552583',
    secondaryColor: '#FDB927',
  },
  Heat: {
    name: 'Miami Heat',
    abbreviation: 'MIA',
    primaryColor: '#98002E',
    secondaryColor: '#F9A01B',
  },
  Celtics: {
    name: 'Boston Celtics',
    abbreviation: 'BOS',
    primaryColor: '#007A33',
    secondaryColor: '#BA9653',
  },
  // Add more teams here
};

const Matches: React.FC = () => {
  // Upcoming matches state
  const [upcomingMatches, setUpcomingMatches] = useState<Match[]>([]);
  const [loadingUpcoming, setLoadingUpcoming] = useState<boolean>(true);
  const [errorUpcoming, setErrorUpcoming] = useState<string | null>(null);

  // Past matches state
  const [pastMatches, setPastMatches] = useState<Match[]>([]);
  const [loadingPast, setLoadingPast] = useState<boolean>(true);
  const [errorPast, setErrorPast] = useState<string | null>(null);

  // Fetch upcoming matches
  const fetchUpcomingMatches = async () => {
    try {
      setLoadingUpcoming(true);
      setErrorUpcoming(null);

      const response = await fetch('http://localhost:5000/api/matches/upcoming');
      if (!response.ok) throw new Error('Failed to fetch upcoming matches');

      const data = await response.json();

      if (data && Array.isArray(data.upcomingMatches)) {
        const matchesFromApi: Match[] = data.upcomingMatches.map((m: any) => {
          let scoreObj = null;
          if (m.score && typeof m.score === 'string' && m.score.includes('-')) {
            const [homeScore, awayScore] = m.score.split('-').map((s: string) => s.trim());
            scoreObj = { home: homeScore, away: awayScore };
          }

          return {
            homeTeam: TEAM_DETAILS[m.team1] || {
              name: m.team1 || 'Unknown Team',
              abbreviation: m.team1 ? m.team1.slice(0, 3).toUpperCase() : 'N/A',
              primaryColor: '#ccc',
              secondaryColor: '#000',
            },
            awayTeam: TEAM_DETAILS[m.team2] || {
              name: m.team2 || 'Unknown Team',
              abbreviation: m.team2 ? m.team2.slice(0, 3).toUpperCase() : 'N/A',
              primaryColor: '#ccc',
              secondaryColor: '#000',
            },
            date: m.date || '',
            time: m.time || '',
            venue: m.venue || 'Unknown Venue',
            status: m.status || 'upcoming',
            score: scoreObj,
          };
        });
        setUpcomingMatches(matchesFromApi);
      } else {
        setUpcomingMatches([]);
      }
    } catch (err) {
      console.error('Error fetching upcoming matches:', err);
      setErrorUpcoming('Failed to load upcoming matches. Please try again later.');
      setUpcomingMatches([]);
    } finally {
      setLoadingUpcoming(false);
    }
  };

  // Fetch past matches
  const fetchPastMatches = async () => {
    try {
      setLoadingPast(true);
      setErrorPast(null);

      const response = await fetch('http://localhost:5000/api/matches/past');
      if (!response.ok) throw new Error('Failed to fetch past matches');

      const data = await response.json();

      if (data && Array.isArray(data.pastMatches)) {
        const matchesFromApi: Match[] = data.pastMatches.map((m: any) => {
          let scoreObj = null;
          if (m.score && typeof m.score === 'string' && m.score.includes('-')) {
            const [homeScore, awayScore] = m.score.split('-').map((s: string) => s.trim());
            scoreObj = { home: homeScore, away: awayScore };
          }

          return {
            homeTeam: TEAM_DETAILS[m.team1] || {
              name: m.team1 || 'Unknown Team',
              abbreviation: m.team1 ? m.team1.slice(0, 3).toUpperCase() : 'N/A',
              primaryColor: '#ccc',
              secondaryColor: '#000',
            },
            awayTeam: TEAM_DETAILS[m.team2] || {
              name: m.team2 || 'Unknown Team',
              abbreviation: m.team2 ? m.team2.slice(0, 3).toUpperCase() : 'N/A',
              primaryColor: '#ccc',
              secondaryColor: '#000',
            },
            date: m.date || '',
            time: m.time || '',
            venue: m.venue || 'Unknown Venue',
            status: m.status || 'finished',
            score: scoreObj,
          };
        });
        setPastMatches(matchesFromApi);
      } else {
        setPastMatches([]);
      }
    } catch (err) {
      console.error('Error fetching past matches:', err);
      setErrorPast('Failed to load past matches. Please try again later.');
      setPastMatches([]);
    } finally {
      setLoadingPast(false);
    }
  };

  // Fetch both upcoming and past matches on component mount
  useEffect(() => {
    fetchUpcomingMatches();
    fetchPastMatches();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Upcoming Matches Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">NBA Upcoming Matches</h1>
        <button
          onClick={fetchUpcomingMatches}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors duration-200"
        >
          <RefreshCcw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {loadingUpcoming ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      ) : errorUpcoming ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-8 rounded-lg flex items-start mb-12">
          <AlertCircle className="flex-shrink-0 mr-3 h-5 w-5 text-red-500" />
          <div>
            <h3 className="text-lg font-medium mb-2">Error loading upcoming matches</h3>
            <p>{errorUpcoming}</p>
            <button
              onClick={fetchUpcomingMatches}
              className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      ) : upcomingMatches.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 text-gray-700 px-6 py-8 rounded-lg text-center mb-12">
          <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-2">No upcoming matches found</h3>
          <p>There are no upcoming matches available right now.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingMatches.map((match, index) => (
            <MatchCard
              key={`${match.homeTeam.abbreviation}-${match.awayTeam.abbreviation}-${match.date}-${index}`}
              match={match}
            />
          ))}
        </div>
      )}

      {/* Past Matches Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">NBA Past Matches</h1>
        <button
          onClick={fetchPastMatches}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition-colors duration-200"
        >
          <RefreshCcw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {loadingPast ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      ) : errorPast ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-8 rounded-lg flex items-start">
          <AlertCircle className="flex-shrink-0 mr-3 h-5 w-5 text-red-500" />
          <div>
            <h3 className="text-lg font-medium mb-2">Error loading past matches</h3>
            <p>{errorPast}</p>
            <button
              onClick={fetchPastMatches}
              className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      ) : pastMatches.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 text-gray-700 px-6 py-8 rounded-lg text-center">
          <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-2">No past matches found</h3>
          <p>There are no past matches available right now.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastMatches.map((match, index) => (
            <MatchCard
              key={`${match.homeTeam.abbreviation}-${match.awayTeam.abbreviation}-${match.date}-${index}`}
              match={match}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Matches;
