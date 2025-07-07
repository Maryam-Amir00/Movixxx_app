import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import axiosInstance from '../api/axiosInstance';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noresults, setNoResults] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortedMovies, setSortedMovies] = useState([]);

  useEffect(() => {
    const sorted = [...movies].sort((a, b) => {
      const aRating = parseFloat(a.imdbRating) || 0;
      const bRating = parseFloat(b.imdbRating) || 0;
      return sortOrder === 'desc' ? bRating - aRating : aRating - bRating;
    });
    setSortedMovies(sorted);
  }, [movies, sortOrder]);

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  const fetchMovieDetails = (imdbID) => {
    axiosInstance
      .get('', { params: { i: imdbID } })
      .then((res) => {
        setSelectedMovie(res.data);
      })
      .catch((err) => {
        console.error('Error fetching movie details', err);
      });
  };

  return (
    <div className='bg-[#121212] min-h-screen text-white px-4 pt-6'>
      <SearchBar
        setMovies={setMovies}
        setLoading={setLoading}
        setNoResults={setNoResults}
      />

      {loading && (
        <p className='text-center mt-10 animate-pulse text-lg text-[#00ffff]'>
          Loading movies...
        </p>
      )}

      {noresults && (
        <p className='text-center mt-10 text-red-400 text-lg'>
          No movies found for your Search...
        </p>
      )}

      {movies.length > 0 && (
        <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-4 mt-6'>
          <p className='text-sm text-gray-400'>
            Showing <span className='text-[#00ffff] font-semibold'>{movies.length}</span> results
          </p>

          <button
            onClick={handleSortToggle}
            className='px-4 py-2 text-sm border border-[#00ffff] text-[#00ffff] rounded-full 
                      hover:bg-[#00ffff20] hover:shadow-[0_0_10px_#00ffff] transition-all duration-300 ease-in-out'
          >
            Sort by Rating: {sortOrder === 'desc' ? 'High → Low' : 'Low → High'}
          </button>
        </div>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10'>
        {sortedMovies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => fetchMovieDetails(movie.imdbID)}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Home;
