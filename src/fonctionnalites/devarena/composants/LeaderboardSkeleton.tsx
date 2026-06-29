import React from 'react';

export default function LeaderboardSkeleton() {
  return (
    <div className="w-full bg-white rounded-2xl p-4 flex items-center gap-4 border border-gray-100 shadow-sm animate-pulse">
      {/* Rank Circle */}
      <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
      
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
      
      {/* Name and Level */}
      <div className="flex-1 space-y-2 py-1">
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-3 bg-gray-100 rounded w-1/4" />
      </div>
      
      {/* Points */}
      <div className="flex flex-col items-end space-y-2">
        <div className="h-5 bg-gray-200 rounded w-16" />
        <div className="h-3 bg-gray-100 rounded w-10" />
      </div>
    </div>
  );
}
