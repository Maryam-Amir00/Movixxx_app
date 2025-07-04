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
                <p className=''>Loading movies...</p>
        )
        }
    </div>
  )
}

export default Home
