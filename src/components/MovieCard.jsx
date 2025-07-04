import React, {useState} from 'react'
import { FaHeart } from 'react-icons/fa'

const MovieCard = ({movie}) => {
    const [hovered , setHovered] = useState(false);

  return (
    <div className='relative bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg backdrop-blur-md border border-white/10 transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_#00ffff] hover:border-[#00ffff] duration-300'
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    >
        <img src={
            movie.Poster !== 'N/A' ? movie.Poster: 'https://via.placeholder.com/300x450?text=No+Poster'
         }   alt={movie.Title} 
         loading='lazy'
          className='w-full h-[400px] object-cover'
        />

        <div className='absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white'>
            <h3 className='text-lg font-bold'>{movie.Title}</h3>
            <p className='text-sm text-gray-400'>{movie.Year}</p>

            {
                hovered && (
                    <div className='mt-2 space-y-2 transition-all duration-300'>
                        <p className='text-xs text-gray-300 italic line-clamp-3'>{movie.Plot || 'No Plot available. '}</p>

                        <div className='flex justify-between items-center mt-2'>
                            <span className='text-sm'>⭐ {movie.imdbRating || 'N/A'}</span>
                            <button className='text-[#00ffff] text-sm flex items-center gap-1 hover:scale-110 transition'>
                                <FaHeart /> WatchList
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default MovieCard
