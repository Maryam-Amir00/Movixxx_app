import React, {useEffect} from 'react'
import { createPortal } from 'react-dom'

const MovieModal = ({movie , onClose}) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [])

    if (!movie) return null;

  return createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-10'>
        <div className="relative bg-[#1e1e1e] rounded-2xl w-full max-w-3xl text-white border border-white/10 overflow-y-auto max-h-[90vh] 
            shadow-[0_0_25px_#00ffff66] hover:shadow-[0_0_40px_#00ffffaa] transition-all duration-500 animate-fadeIn">
        <button
            className="absolute top-3 right-4 text-[#00ffff] text-2xl font-bold hover:scale-110 hover:drop-shadow-[0_0_6px_#00ffff] transition-all duration-300"
            onClick={onClose}
            aria-label="Close"
            >
            ✖
        </button>


            <div className='p-6 space-y-4'>
                <h2 className='text-2xl font-bold text-center'>
                    {movie.Title}
                </h2>

                <p className='text-gray-300 italic text-sm text-justify'>{movie.Plot || 'No plot available.'}</p>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm'>
                    <p><strong>🎭 Genre:</strong> {movie.Genre}</p>
                    <p><strong>🎬 Director:</strong> {movie.Director}</p>
                    <p><strong>🕒 Runtime:</strong> {movie.Runtime}</p>
                    <p><strong>⭐ Rating:</strong> {movie.imdbRating}</p>
                    <p><strong>👥 Actors:</strong> {movie.Actors}</p>
                    <p><strong>📅 Released:</strong> {movie.Released}</p>
                </div>
            </div>
        </div>
    </div>, document.getElementById('modal-root')
  );
}

export default MovieModal
