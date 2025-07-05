import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {WatchlistProvider} from './context/WatchlistContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WatchlistProvider>
      <App />
    </WatchlistProvider>
  </StrictMode>,
)
