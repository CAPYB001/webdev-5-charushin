import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import MovieCard from '../components/MovieCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import { searchMovies } from '../services/movieService'

function SearchPage() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    if (!query.trim()) {
      return
    }
    setLoading(true)
    setError('')
    setSearched(true)
    try {
      const results = await searchMovies(query)
      setMovies(results)
    } catch (err) {
      setMovies([])
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleNavigate = id => {
    navigate(`/movie/${id}`)
  }

  return (
    <div>
      <section className="hero">
        <h1>Поиск фильмов в OMDB</h1>
        <p>Введите название фильма или сериала, чтобы получить постер, год выхода и перейти к деталям.</p>
      </section>

      <div className="search-card">
        <SearchForm
          value={query}
          onChange={e => setQuery(e.target.value)}
          onSubmit={handleSubmit}
          loading={loading}
        />
        <div className="info-bar">
          <span>API: OMDB</span>
          <span>Всего найдено: {movies.length}</span>
        </div>
      </div>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && searched && movies.length === 0 && !error && (
        <div className="status">Ничего не найдено</div>
      )}

      {!loading && movies.length > 0 && (
        <div className="grid">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} onClick={handleNavigate} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage

