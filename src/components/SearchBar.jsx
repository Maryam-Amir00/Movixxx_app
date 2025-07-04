import React, {useState , useEffect, useCallback} from 'react'
import debounce from 'lodash.debounce'
import { FiSearch } from 'react-icons/fi'
import axiosInstance from '../api/axiosInstance'

const SearchBar = ({setMovies , setLoading, setNoResults}) => {
    const [query, setQuery] = useState('');

    const fetchMovies = useCallback(
      debounce((searchTerm) => {
        if (!searchTerm){
          setMovies([]);
          setNoResults(false);
          return;
        }

        setLoading(true);

        
      })
    )

  return (
    <div className='w-full flex justify-center mt-8 px-4'>
      <div className='relative w-full max-w-xl'>
        <input type="text" 
        placeholder='Search for movies...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='w-full bg-[#1e1e1e] text-white rounded-full py-3 px-5 pl-12 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition-all duration-300'
        />
        <FiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-xl opacity-60' />
      </div>
    </div>
  )
}

export default SearchBar
