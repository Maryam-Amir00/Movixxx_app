import React, {useState} from 'react'
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [movies , setMovies] = useState([]);
    const [loading , setLoading] = useState(false);
    const [noresults , setNoResults] = useState(false);

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
              <div key={movie.imdbID}
              className='bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300'> 
                      <img src={
                        movie.Poster !== 'N/A' ? movie.Poster: 'https://via.placeholder.com/300x450?text=No+Poster'
                      } alt={movie.Title} 
                        className='w-full h-[400px] object-cover'
                      />
                      <div className='p-4'>
                        <h3 className='text-lg font-bold mb-1'>{movie.Title}</h3>
                        <p className='text-sm text-gray-400'>{movie.Year}</p>
                      </div>
              </div>
            ))

            }
        </div>
    </div>
  )
}

export default Home
