import React, {useState} from 'react'
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import axiosInstance from '../api/axiosInstance';

const Home = () => {
    const [movies , setMovies] = useState([]);
    const [loading , setLoading] = useState(false);
    const [noresults , setNoResults] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchMovieDetails = (imdbID) => {
      axiosInstance.get('', {params: { i: imdbID}})
      .then((res) => {
        setSelectedMovie(res.data);
      }).catch((err) => {
        console.error('Error fetching movie details', err);
      });
    };

  return (
    <div className='bg-[#121212] min-h-screen text-white px-4 pt-6'>
        <SearchBar 
         setMovies = {setMovies}
         setLoading = {setLoading}
         setNoResults= {setNoResults}
        />

        { loading && (
                <p className='text-center mt-10 animate-pulse text-lg text-[#00ffff]'>Loading movies...</p>
        )
        }

        { noresults && (
          <p className='text-center mt-10 text-red-400 text-lg'>No movies found for your Search...</p>
        )}

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10'>
            { movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} onClick={() => fetchMovieDetails(movie.imdbID)}/>
            ))

            }
        </div>

        { selectedMovie && (
          <MovieModal
            movie = {selectedMovie}
            onClose = {() => setSelectedMovie(null)}
            />
        )}
    </div>
  )
}

export default Home
