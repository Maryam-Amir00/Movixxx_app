# 🎬 MOVIXXX – Movie Search Application

MOVIXXX is a fully responsive and modern **movie search application** built using **React**, **Tailwind CSS**, **Vite**, and the **OMDb API**. This application allows users to search for movies, view detailed information, and curate a personal watchlist — all with a sleek UI inspired by **neon-glow** and **glassmorphism** design principles.

---

## 🧩 Features

- 🔍 **Real-time Movie Search** with debounced input
- 🎥 **Detailed Movie Cards** with hover effects, plot, rating
- ❤️ **Watchlist** using React Context + localStorage
- 🎨 **Modern UI/UX** with glassmorphism, neon hover, and responsive design
- 🌙 **Dark Theme** with polished transitions and glow accents
- 📦 **API Integration** with [OMDb API](https://www.omdbapi.com/)

---

## 🛠️ Tech Stack

| Tech | Usage |
|------|-------|
| `React` | Core framework |
| `Tailwind CSS` | Styling & responsive design |
| `Vite` | Build tool for fast development |
| `Axios` | API requests |
| `Lodash.debounce` | Optimized input handling |
| `React Icons` | Iconography |

---

## 📁 Folder Structure

```plaintext
movixxx/
├── public/
├── src/
│ ├── assets/ # Logo, images
│ ├── api/ # Axios instance
│ ├── components/ # Navbar, Footer, MovieCard, Modal, SearchBar
│ ├── context/ # WatchlistContext (Context API + localStorage)
│ ├── pages/ # Home.jsx, Watchlist.jsx
│ ├── App.jsx
│ └── main.jsx
├── .env # API Key from OMDb
├── package.json
├── tailwind.config.js
└── vite.config.js
```


---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movixxx-movie-search-app.git
cd movixxx-movie-search-app

