import React from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';


const Watchlist = () => {
  const { watchlist } = useWatchlist();

  return (
    <div className='bg-[#121212] min-h-screen text-white px-4 pt-6'>
      <h2 className='text-2xl font-bold text-center mb-6'>Your Watchlist 🎬</h2>
      {watchlist.length === 0 ? (
        <p className='text-center text-gray-400'>Your watchlist is empty.</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
