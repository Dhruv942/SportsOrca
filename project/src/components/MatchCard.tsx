import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import type { Match } from '../types';

interface MatchCardProps {
  match: Match;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const { homeTeam, awayTeam, date, time, venue, status, score } = match;
  
  // Status badge styling based on match status
  const statusStyles = {
    upcoming: 'bg-blue-100 text-blue-800',
    live: 'bg-green-100 text-green-800 animate-pulse',
    finished: 'bg-gray-100 text-gray-800'
  };
  
  const statusLabel = {
    upcoming: 'Upcoming',
    live: 'Live Now',
    finished: 'Final'
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
            {statusLabel[status]}
          </span>
          {status === 'live' && (
            <span className="text-sm font-medium text-gray-500">
              Q4 - 2:45
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col items-center text-center w-5/12">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
              style={{
                backgroundColor: homeTeam?.primaryColor ?? '#ccc',
                color: homeTeam?.secondaryColor ?? '#000'
              }}
            >
              <span className="text-lg font-bold">{homeTeam?.abbreviation ?? 'N/A'}</span>
            </div>
            <span className="text-sm font-medium">{homeTeam?.name ?? 'Unknown Team'}</span>
            {(status === 'live' || status === 'finished') && score && (
              <span className="text-2xl font-bold mt-2">{score.home}</span>
            )}
          </div>
          
          <div className="w-2/12 flex items-center justify-center">
            <span className="text-gray-500 font-medium">VS</span>
          </div>
          
          <div className="flex flex-col items-center text-center w-5/12">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
              style={{
                backgroundColor: awayTeam?.primaryColor ?? '#ccc',
                color: awayTeam?.secondaryColor ?? '#000'
              }}
            >
              <span className="text-lg font-bold">{awayTeam?.abbreviation ?? 'N/A'}</span>
            </div>
            <span className="text-sm font-medium">{awayTeam?.name ?? 'Unknown Team'}</span>
            {(status === 'live' || status === 'finished') && score && (
              <span className="text-2xl font-bold mt-2">{score.away}</span>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center mb-2">
            <Calendar size={16} className="text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">{formatDate(date)}</span>
          </div>
          <div className="flex items-center mb-2">
            <Clock size={16} className="text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">{time} ET</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">{venue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
