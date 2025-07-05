import React from 'react';
import { FaHeart, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useWatchlist } from '../context/WatchlistContext';

const Navbar = ({ isWatchlistPage, onTogglePage }) => {
  const { watchlist } = useWatchlist();

  return (
    <nav className='bg-[#121212] text-white shadow-md sticky top-0 z-50 px-4 py-3 md:px-8 backdrop-blur-md border-b border-white/10'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center space-x-3 group'>
          <img className='w-10 h-10 group-hover:scale-105 transition-transform duration-300' aria-hidden='true' src={logo} alt="Logo" />
          <h1 className='text-xl md:text-2xl font-extrabold font-poppins tracking-wide group-hover:scale-105 group-hover:drop-shadow-[0_0_6px_#00ffff] transition-all duration-300'>
            <span className='text-[#00ffff]'>MOVIXXX</span>
          </h1>
        </div>

        <button
          className='relative group cursor-pointer'
          aria-label={isWatchlistPage ? 'Close Watchlist' : 'Watchlist'}
          title={isWatchlistPage ? 'Close Watchlist' : 'Watchlist'}
          onClick={onTogglePage}
        >
          {
            isWatchlistPage ? (
              <FaTimes className='text-[#00ffff] text-xl transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#00ffff]' />
            ) : (
              <>
                <FaHeart className='text-[#00ffff] text-xl transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#00ffff]' />
                {watchlist.length > 0 && (
                  <span className='absolute -top-2 -right-2 bg-[#00ffff] text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse'>
                    {watchlist.length}
                  </span>
                )}
              </>
            )
          }
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
