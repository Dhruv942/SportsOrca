import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 animate-pulse">
      <div className="flex justify-between items-center mb-4">
        <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col items-center w-5/12">
          <div className="w-16 h-16 rounded-full bg-gray-200 mb-2"></div>
          <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
          <div className="h-8 w-8 bg-gray-200 rounded mt-2"></div>
        </div>
        
        <div className="w-2/12 flex items-center justify-center">
          <div className="h-5 w-8 bg-gray-200 rounded"></div>
        </div>
        
        <div className="flex flex-col items-center w-5/12">
          <div className="w-16 h-16 rounded-full bg-gray-200 mb-2"></div>
          <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
          <div className="h-8 w-8 bg-gray-200 rounded mt-2"></div>
        </div>
      </div>
      
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center mb-2">
          <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center mb-2">
          <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>
        <div className="flex items-center">
          <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;