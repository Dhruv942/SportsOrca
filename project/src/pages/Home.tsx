import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Trophy, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Follow Your Favorite NBA Teams and Matches
              </h1>
              <p className="text-lg mb-8 text-indigo-100">
                Stay updated with the latest scores, schedules, and matchups from around the league.
              </p>
              <Link 
                to="/matches" 
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                View Matches
                <ChevronRight size={20} className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 bg-indigo-700 rounded-full flex items-center justify-center shadow-xl">
                <div className="absolute inset-2 bg-indigo-800 rounded-full"></div>
                <div className="absolute inset-8 bg-indigo-900 rounded-full flex items-center justify-center z-10">
                  <span className="text-orange-500 text-5xl font-bold">NBA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="text-indigo-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Match Schedules</h3>
              <p className="text-gray-600">
                Stay updated with upcoming games and never miss your favorite team's matchups.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                <Trophy className="text-indigo-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Live Scores</h3>
              <p className="text-gray-600">
                Get real-time score updates and game statuses for all NBA games.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="text-indigo-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Game History</h3>
              <p className="text-gray-600">
                Access past game results and statistics for all teams and players.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to explore NBA matches?</h2>
          <p className="text-lg mb-8 text-gray-600 max-w-3xl mx-auto">
            Check out the latest NBA game schedules and stay on top of all the action with our real-time updates.
          </p>
          <Link 
            to="/matches" 
            className="inline-flex items-center px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white font-medium rounded-lg transition-colors duration-200"
          >
            View All Matches
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;