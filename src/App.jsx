import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import WatchlistPage from './pages/Watchlist';

const App = () => {
  const [isWatchlistPage, setIsWatchlistPage] = useState(false);

  const togglePage = () => {
    setIsWatchlistPage((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121212]">
      <Navbar isWatchlistPage={isWatchlistPage} onTogglePage={togglePage} />
      
      <main className="flex-grow">
        {isWatchlistPage ? <WatchlistPage /> : <Home />}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
