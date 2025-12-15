import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import SearchPage from './pages/SearchPage'
import MovieDetailsPage from './pages/MovieDetailsPage'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="content">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

