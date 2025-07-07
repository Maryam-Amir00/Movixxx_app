# 🎬 MOVIXXX – Movie Search Application

MOVIXXX is a modern, responsive **movie search application** built with **React**, **Tailwind CSS**, **Vite**, and the **OMDb API**. It allows users to search movies, view detailed info, sort results by ratings, and manage a personalized watchlist all wrapped in a sleek dark UI with **neon-glow** and **glassmorphism** aesthetics.

---

## 🧩 Features

- 🔍 **Real-time Movie Search** with debounce optimization
- 🎥 **Detailed Movie Cards** with plot, hover effects, and ratings
- ❤️ **Watchlist** using React Context API + localStorage
- ⬆️ **Sort by Rating** (High → Low / Low → High)
- 🔢 **Result Count Display** (shows total search results)
- 🎨 **Modern UI/UX** with dark theme, neon-glow, and glassmorphism
- 📦 **OMDb API Integration** for movie data

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
git clone https://github.com/Maryam-Amir00/movixxx-movie-search-app.git
cd movixxx-movie-search-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variable

```ini
VITE_OMDB_API_KEY=your_api_key_here
```

### 4. Run The App

```bash
npm run dev
```
---

## 📬 Feedback

Have suggestions or spotted an issue? Feel free to open a GitHub issue. Your feedback is appreciated!

---

## License

This project is licensed under the MIT License.


